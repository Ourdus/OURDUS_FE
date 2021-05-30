pipeline {
  environment {
    registry = "hjwoou/ourdus-fe"
    registryCredential = 'docker-hub'
    dockerImage = ''
    workdir = "${env.WORKSPACE}"
    dockerfile = "Dockerfile.prod"
  }

  agent any
  
  stages {
    stage('Dokcer-image-build') {
      steps{
        dir("${env.WORKSPACE}") {
          script {
            dockerImage = docker.build("${env.registry}:${env.BUILD_NUMBER}", "-f ${env.dockerfile} .")
          }
        }
      }
    }
    stage('Docker-image-push') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
            dockerImage.push()
            dockerImage.push("latest")
          }
        }
      }
    }
    stage('Docker-image-remove') {
      steps{
        sh "docker rmi ${env.registry}:${env.BUILD_NUMBER}"
    }
  }
}
