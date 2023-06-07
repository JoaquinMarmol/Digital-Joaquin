<h1>🎯About</h1>
<p>
  VintageCars is a responsive booking website where people can list or rent vintage, old, classic, and other types of cars for short-term use. Travelers and car enthusiasts can browse the site for the perfect vintage car rental by applying various filters to narrow their searches. Filters include factors like available dates, location, and car type. After creating an account and logging into the website, users can book their desired vintage car and embark on a nostalgic journey.
</p>
<p>
  We built this project as a part of our studies in Digital House for the Certified Tech Developer career. As we followed an agile approach, the process was divided into a series of sprints. Each sprint involved discovery, design, development, and testing - as well as a lot of teamwork.
</p>
<p>
  Creating this project from scratch was a challenging and wonderful experience that changed us for the better. The learn-by-doing method allowed us to absorb and acquire not only technical but also soft skills.
</p>

<h1>🔥 Features</h1>
<ul>
  <li>Responsive website</li>
  <li>Search bar with filters</li>
  <li>Lightbox gallery</li>
  <li>Interactive calendar</li>
  <li>Creation of an account</li>
  <li>Login in & JWT</li>
  <li>Booking an accommodation</li>
  <li>Sending confirmation emails</li>
  <li>Publishing new products</li>
  <li>Editing publications</li>
</ul>

<h1>💪 Main Objectives</h1>
<h3>✔️ Backend</h3>
<ul>
  <li>Create a CRUD Rest API with Spring Boot and Hibernate</li>
  <li>Document the API with Swagger</li>
  <li>Model UML and connect Java code to a MySQL database</li>
  <li>Implement register and login through Spring Boot Security</li>
  <li>Securing booking endpoint through JWT and roles assignment</li>
</ul>

<h3>✔️ Frontend</h3>
<ul>
  <li>Create a responsive web layout with React, HTML and CSS</li>
  <li>Manage interactions and events</li>
  <li>Connect to an API and handle response states</li>
</ul>

<h3>✔️ Database</h3>
<ul>
  <li>Model a database that satisfies the project's functionalities with a DER diagram</li>
  <li>Create and implement database</li>
</ul>

<h3>✔️ Infrastructure</h3>
<ul>
  <li>Implement an EC2 instance for the backend</li>
  <li>Implement an S3 Bucket for the frontend and all images</li>
  <li>Deploy the app on AWS</li>
  <li>Connect to provided database</li>
  <li>Build an effective CI/CD pipeline</li>
</ul>

<h3>✔️ Testing</h3>
<ul>
  <li>Notify errors</li>
  <li>Write test cases, smoke and regression tests</li>
  <li>Automate tests with JavaScript and Selenium</li>
  <li>Test web services with Postman</li>
</ul>

<h1>⚡ Project Database Structure</h1>
<p>Database structure description goes here.</p>

<h1>✅ Requirements</h1>
<p>Before starting 🏁, you need to have Git, Node, VSCode, IntelliJ, and MySQL installed.</p>

<h1>🏁 Starting</h1>
<p>
  <code># Clone this project</code><br>
  <code>$ git clone &lt;repository-url&gt;</code><br><br>
  <code># Access</code><br>
  <code>$ cd grupo-07/</code><br><br>
  <code># Initialize the project</code><br>
  1. Open the 'backend' folder in IntelliJ.<br>
  2. In the application.properties file, modify the user and password with your MySQL data.<br>
  3. Run the API.<br>
  4. Open MySQL and run <a href="url">(this script)</a> to load data into the database.<br>
  <em>Important: the admin users must be added from Postman or directly into the database.</em><br><br>
  <code># Install dependencies</code><br>
  1. Open the 'frontend' folder in VSCode and open a new terminal:<br>
  <code>$ npm install</code><br>
  
<h1>Pipeline:</h1>

<code>
stages:
    - build
    - deploy
    - build-front
    - deploy-front

build:
    stage: build
    image: maven:3.8.6-openjdk-18
    script:
        - echo "Building app..."
        - cd "BACK END/Vintage-Car"
        - mvn clean install
        - echo "Finished building the app."
    artifacts:
        expire_in: 1 week
        paths:
            - "BACK END/Vintage-Car/target/"
    only:
        - main


deploy:
    stage: deploy
    image: alpine:3.11
    before_script:
        - apk update && apk add openssh-client bash
        - mkdir -p ~/.ssh
        - eval $(ssh-agent -s)
        - echo -e "$SSH_BACK_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
        - touch ~/.ssh/config
        - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
        - ssh-keyscan -H $DEPLOY_SERVER_IP >> ~/.ssh/known_hosts
    script:
        - echo "Deploying started..."
        - ssh ubuntu@$DEPLOY_SERVER_IP "sudo /tmp/apache-tomcat-9.0.70/bin/shutdown.sh; sudo rm -r /tmp/apache-tomcat-9.0.70/webapps/*"
        - scp -i INFRA/vintageCar.pem "BACK END/Vintage-Car/target/vintage.war" ubuntu@$DEPLOY_SERVER_IP:/tmp/apache-tomcat-9.0.70/webapps
        - ssh ubuntu@$DEPLOY_SERVER_IP "sudo /tmp/apache-tomcat-9.0.70/bin/startup.sh"
        - echo "Finished deploying the app"
    only:
        - main

build-front:
    stage: build-front
    image: ubuntu:latest
    script:
        - echo "Building app..."
        - cd "FRONT END/vintagecars"
        - apt-get update
        - apt-get install nodejs -y
        - apt-get install npm -y
        - npm install -y
        - CI=false npm run build
        - echo "Finished building the app."
        - apt install rar
        - cd build; rar a vintage.rar *
    artifacts:
        expire_in: 1 week
        paths:
            - "FRONT END/vintagecars/build"
    only:
        - main
    timeout: 3 hours 30 minutes

deploy-front:
    stage: deploy-front
    image: alpine:3.11
    before_script:
        - apk update && apk add openssh-client bash
        - mkdir -p ~/.ssh
        - eval $(ssh-agent -s)
        - echo -e "$SSH_BACK_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
        - touch ~/.ssh/config
        - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
        - ssh-keyscan -H $DEPLOY_SERVER_IP_FRONT >> ~/.ssh/known_hosts
    script:
        - echo "Deploying started..."
        - ssh ubuntu@$DEPLOY_SERVER_IP_FRONT "sudo rm -r /var/www/html/*"
        - scp -i INFRA/vintageCar.pem "FRONT END/vintagecars/build/vintage.rar" ubuntu@$DEPLOY_SERVER_IP_FRONT:/var/www/html
        - ssh ubuntu@$DEPLOY_SERVER_IP_FRONT "cd /var/www/html; unrar x vintage.rar; sudo /etc/init.d/apache2 restart"
        - echo "Finished deploying the app."
    only:
        - main
</code>

  

  
