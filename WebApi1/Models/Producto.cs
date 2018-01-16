﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi1.Models
{
    public class Producto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Categoria { get; set; }
        public decimal Precio { get; set; }
    }
}