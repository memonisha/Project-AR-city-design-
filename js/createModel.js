AFRAME.registerComponent("createmodels", {
  init: async function() {
    var models = await this.getModels();
    var barcodes = Object.keys(models);
    barcodes.map(barcode => {
      var model = models[barcode];
      this.createModel(model);
    });
  },
  getModels: function() {
    return fetch("js/models.json")
      .then(res => res.json())
      .then(data => data);
  },
  createModel: function(model) {
    var barcodeValue = model.barcode_value;
    var modelUrl = model.model_url;
    var modelName = model.model_name;
    // select the element "a-scene" in the following query selector   😀task😀
    var scene = document.querySelector("");
//create an element called "a-marker" here   
    var marker = document.createElement("");

    marker.setAttribute("id", `marker-${modelName}`);
    marker.setAttribute("type", "barcode");
    marker.setAttribute("model_name", modelName);
    marker.setAttribute("value", barcodeValue);
    marker.setAttribute("markerhandler", {});

//append marker to scene here as  scene.appendChild(marker);  😀task😀

      //write above this statement

   

    if (barcodeValue === 0) {
      var modelEl = document.createElement("a-entity");
      modelEl.setAttribute("id", `${modelName}`);
      modelEl.setAttribute("geometry", {
        primitive: "box",
        width: model.width,
        height: model.height
      });
      modelEl.setAttribute("position", model.position);
      modelEl.setAttribute("rotation", model.rotation);
      modelEl.setAttribute("material", {
        color: model.color
      });

      //append modelEl to marker here as marker.appendChild(modelEl);  😀task😀

      //write above this statement
    } else {
      var modelEl = document.createElement("a-entity");
      modelEl.setAttribute("id", `${modelName}`);
      modelEl.setAttribute("gltf-model", `url(${modelUrl})`);
      modelEl.setAttribute("scale", model.scale);
      modelEl.setAttribute("position", model.position);
      modelEl.setAttribute("rotation", model.rotation);
      //append modelEl to marker here as marker.appendChild(modelEl);  😀task😀

      //write above this statement
      
    }
  }
});
