export const usuario = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
}

export async function getUsuario() {
  const user = await fetch('https://api.example.com/usuario');
  const data = await user.json();
  return data;
}