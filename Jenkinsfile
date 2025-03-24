pipeline {
    agent any

    stages {
        stage('Git clone') {
            steps {
               git branch: 'main', url: 'https://github.com/dev-verma/contact_ui_ng_app.git'
            }
        }
        
        stage('Docker Image'){
            steps{
                sh 'docker build -t vermakqr/contact_ui_app .'
            }
        }
        
       stage('Docker Image push'){
            steps{
            withCredentials([string(credentialsId: 'docker_pwd', variable: 'docker_pwd')]) {
                   sh 'docker login -u vermakqr -p ${docker_pwd}'
                   sh 'docker push vermakqr/contact_ui_app'
            }
            }
        }
        
         stage('k8s deployment'){
            steps{
             sh 'kubectl apply -f contact_ui_deployment.yml'
            }
        }  
        
        
    }
}
