# Buscador de Pokemon

Este proyecto se realizo en linea para postular a Practicante en Bloom Reuse, este proyecto fue realizado en React+TypeScript+Vite.

## Instalación

Hay que tener instalado [Node.js](https://nodejs.org/), la instalacion puede ser diferente segun tu sistema operativo.

1. Clona el repo:
   ```bash
   git clone https://github.com/Vynnadra/practica-pokemon-search
   ```
2. Navega al directorio correspondiente:
   ```bash
   cd practica-pokemon-search
   ```
3. Instala las dependencias:
   Para la creacion del proyecto se utilizó `npm` por lo que las indicaciónes sera para esta herramienta.

   ```bash
   npm install
   ```

4. Para ejecutar el proyecto:
   ```bash
   npm run dev
   ```

## Uso

El uso de la aplicacion es el siguiente:

Clickea encima de la barra de busqueda y tipea el pokemon que quieras buscar, a medida que vayas escribiendo te iran apareciendo hasta un maxiom de 9 pokemones que corresponden a coincidencias dentro de la API de PokeAPI.

## Estructura del proyecto (solo directorios importantes)

    |-public
    |   |-type
    |   |   |- ...chunksofimages...
    |   |- pokemon.svg
    |-src
        |-components
        |   |- Card.css
        |   |- Card.tsx
        |   |- Search.css
        |   |- Search.tsx
        |- App.css
        |- App.tsx
        |- index.css # unused
        |- main.tsx
