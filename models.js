// Modelos ORM

var Sequelize = require('sequelize');

var sequelize = new Sequelize('blog', 'core', 'core');

// Campos de los posts.
var Post = sequelize.define('Post',
            { authorId: {
                 type: Sequelize.INTEGER,
                 validate: {
                     notEmpty: {msg: "El campo autor no puede estar vacio"}}
              },
              title: {
                 type: Sequelize.STRING,
                 validate: {
                     notEmpty: {msg: "El campo del titulo no puede estar vacio"}}
              },
              body: {
                 type: Sequelize.TEXT,
                 validate: {
                     notEmpty: {msg: "El cuerpo del post no puede estar vacio"}}
              }
            });


// Exportar la clase creada:
exports.Post = Post;