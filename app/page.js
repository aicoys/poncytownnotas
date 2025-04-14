
'use client'
import { useState } from 'react'

export default function Page() {
  const [pedido, setPedido] = useState({
    nombre: '', producto: '', talla: '', color: '',
    anticipo: '', total: '', mayoreo: false, estado: 'pendiente'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPedido(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const mensajeWhatsApp = \`Hola, soy \${pedido.nombre}. Mi pedido es:
🧢 Producto: \${pedido.producto}
📏 Talla: \${pedido.talla} - 🎨 Color: \${pedido.color}
💰 Anticipo: $ \${pedido.anticipo} / Total: $ \${pedido.total}
🔁 Mayoreo: \${pedido.mayoreo ? 'Sí' : 'No'}
📦 Estado: \${pedido.estado}
\`;

  const enviarWhatsApp = () => {
    const mensaje = encodeURIComponent(mensajeWhatsApp);
    window.open('https://wa.me/?text=' + mensaje, '_blank');
  };

  return (
    <div>
      <h1>Registro de Pedido</h1>
      <input name="nombre" placeholder="Nombre del cliente" onChange={handleChange} /><br />
      <input name="producto" placeholder="Producto" onChange={handleChange} /><br />
      <input name="talla" placeholder="Talla" onChange={handleChange} /><br />
      <input name="color" placeholder="Color" onChange={handleChange} /><br />
      <input name="anticipo" placeholder="Anticipo $" type="number" onChange={handleChange} /><br />
      <input name="total" placeholder="Total $" type="number" onChange={handleChange} /><br />
      <label><input type="checkbox" name="mayoreo" onChange={handleChange} /> Mayoreo</label><br />
      <select name="estado" onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="listo">Listo</option>
      </select><br /><br />

      <button onClick={enviarWhatsApp}>Enviar por WhatsApp</button>
    </div>
  );
}
