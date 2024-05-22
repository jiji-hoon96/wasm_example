// Load the WebAssembly module

const importObject = {};

const path_to_wasm = "./pkg/wasm_example_bg.wasm";

fetch(path_to_wasm)
  .then((response) => response.arrayBuffer())

  .then((bytes) => WebAssembly.instantiate(bytes, importObject))

  .then((results) => {
    const wasm = results.instance.exports;
    console.log(wasm);
    // Call a function exported by the WebAssembly module

    console.log(wasm.add(100000, 4));
    console.log(wasm.minus(100, 100));
  });
