using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi1.Models;

namespace WebApi1.Controllers
{
    public class ProductosController : ApiController
    {
        
        Producto[] productos = new Producto[]
        {
            new Producto {Id = 1, Nombre = "Salsa de tomate", Categoria = "Comestibles", Precio = 1},
            new Producto {Id = 2, Nombre = "Yoyo", Categoria = "Juguetes", Precio = 3.75m},
            new Producto {Id = 3, Nombre = "Martillo", Categoria = "Herramientas", Precio = 16.99m},
        };

        [HttpGet]
        public IEnumerable<Producto> ObtenerTodosLosProductos()
        {
            return productos;
        }

        [HttpGet]
        public IHttpActionResult ObtenerProducto(int id)
        {
            var producto = productos.FirstOrDefault(p => p.Id == id);
            if (producto == null)
            {
                return NotFound();
            }
            return Ok(producto);
        }

    }
}
