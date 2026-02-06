# Setup Instructions for Taifur1

## MongoDB Atlas Configuration
1. **Create a MongoDB Atlas Account**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for an account.
2. **Create a New Cluster**: Once logged in, click on 'Build a Cluster' and follow the instructions to create a new cluster.
3. **Add Database User**: Under the 'Database Access' section, create a new database user with permissions to read and write data.
4. **Network Access**: Allow access to your cluster by adding IP addresses under the 'Network Access' section. You can add your own IP or allow access from anywhere (not recommended for production).
5. **Get Connection String**: In the 'Clusters' section, click on 'Connect' for your cluster, select 'Connect your application', and copy the connection string. Replace `<password>` with your database user's password.

## Gemini API Key Configuration
1. **Sign Up for Gemini Account**: Go to [Gemini](https://www.gemini.com/) and create an account.
2. **Generate API Key**: Once logged in, navigate to the API section of your account settings to generate a new API key and secret.
3. **Store the API Key and Secret Safely**: Keep these credentials safe, as you'll need them for the application configuration.

## Environment Variables
To ensure the application works correctly, create a `.env` file in the root of your project and include the following variables:
```env
MONGODB_URI='your_mongodb_connection_string'
GEMINI_API_KEY='your_gemini_api_key'
GEMINI_API_SECRET='your_gemini_api_secret'
```
Make sure to replace the placeholders with the actual values obtained from MongoDB Atlas and Gemini.

## Local Development Setup
1. **Clone the Repository**: Run the following command to clone the repository:
   ```bash
   git clone https://github.com/idealtaifur/Taifur1.git
   ```
2. **Navigate to the Project Directory**:  
   ```bash
   cd Taifur1
   ```
3. **Install Dependencies**: Use npm or yarn to install the necessary dependencies for the project:
   ```bash
   npm install
   # or
   yarn install
   ```
4. **Run the Application**: Start the application using:
   ```bash
   npm start
   # or
   yarn start
   ```
5. **Access the Application**: Open your browser and navigate to `http://localhost:3000` to view the application in action.

---

Ensure you have all prerequisites installed, including Node.js and MongoDB Compass for managing your MongoDB database if needed. Happy coding!