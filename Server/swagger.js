import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition:{
    openapi:"3.0.0",
    info:{
      title:"NBA V2 API Docs",
      description: 'API for querying NBA player and team statistical data from 2003 to present.',
      version: '1.0.0',
    },
  },
  apis:['./routes/*.js', './models/*.js']
};

const swaggerSpec = swaggerJsDoc(options)

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs json format 

  app.get('docs.json', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  })
}

export default swaggerDocs;