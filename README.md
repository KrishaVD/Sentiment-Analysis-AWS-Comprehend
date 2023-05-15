# Sentiment-Analysis-AWS-Comprehend

**Introduction**

Welcome to this comprehensive guide on performing sentiment analysis using AWS Comprehend, Lambda, and API Gateway. This project leverages AWS's powerful services to build a web interface where users can input text to analyse the sentiment, determining whether it is positive, negative, or neutral.
The application is a simple web interface that takes a text input from a user. Once the user submits the text, it triggers an AWS Lambda function through the API Gateway. This Lambda function communicates with Amazon Comprehend, a natural language processing (NLP) service that uses machine learning to determine the sentiment of the text. The sentiment result (positive, negative, or neutral) is then returned to the web interface and displayed to the user.

**Technologies Used**

•	HTML/CSS/JavaScript: To create the web interface where users can input the text.
•	AWS Lambda: To handle the serverless computing part, where we define our functions to interact with AWS Comprehend.
•	AWS API Gateway: To create, deploy, and manage a RESTful API that enables the communication between the web interface and the AWS Lambda function.
•	AWS Comprehend: A natural language processing (NLP) service that uses machine learning to find insights and relationships in text.

**Project Setup**

You can access the complete project on GitHub at `https://github.com/KrishaVD/Sentiment-Analysis-AWS-Comprehend.git`. Here are the steps you can follow to set up and run the project locally.

**Prerequisites**

•	AWS Account
•	Basic knowledge of AWS services like Lambda, API Gateway, and Comprehend.
•	Basic understanding of HTML/CSS/JavaScript.

**Setup Instructions**

Step 1: Clone the Repository

Clone the repository by running the following command in your terminal: 
git clone https://github.com/username/repo.git
This will give you all the necessary code to get started.

Step 2: Setting up the AWS Lambda Function

AWS Lambda is a service that lets you run your code without provisioning or managing servers. We'll use Lambda to analyze our text data with Comprehend whenever the API Gateway receives a request.
Navigate to the AWS Console and create a new function in the Lambda service. You can name it "comprehend-function". In the function code, paste in the Python code from the `lambda_function.py` file in the cloned GitHub repository. This function will be triggered by an event from our API Gateway.
Ensure your AWS account has the necessary permissions to access Comprehend from the Lambda function.

Step 3: Setting up the AWS API Gateway

AWS API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
In the API Gateway service in the AWS Console, create a new API. Set up a new resource and method that corresponds to your AWS Lambda function. This will create an endpoint that you can use to trigger your Lambda function.

Step 4: Updating the API Endpoint in the JavaScript file

In the `app.js` file in the cloned GitHub repository, replace the placeholder URL in the AJAX call with the invoke URL of the API you created in the API Gateway. This will allow your web page to interact with your Lambda function.

Step 5: Running the Application

Open `index.html` in your browser to start the application. This will load the webpage that interacts with your AWS Lambda function, sending text data for analysis and displaying the results.


**Conclusion**

This project showcases how you can leverage AWS services to build a sentiment analysis tool. With this, you can analyse text in real-time, opening up possibilities for real-time feedback, social media monitoring, and much more. If you have any questions or run into any issues setting up the project, feel free to raise an issue in the GitHub repository.

**Happy coding!**

