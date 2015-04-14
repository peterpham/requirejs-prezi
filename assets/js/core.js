require.config({
    paths: {
        "SimpleMathModule": "module/simplemath",

        "bootstrap": "vendor/bootstrap/bootstrap.min",

        "ckeditor-core": "vendor/ckeditor/ckeditor",
    	"ckeditor-jquery": "vendor/ckeditor/adapters/jquery"
    },
    shim: {
    	"bootstrap": {"deps" :["jquery"]},
    	"ckeditor-jquery":{deps:["jquery","ckeditor-core"]}
    }
});