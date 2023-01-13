// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "laberindo":
            case "nivel1":return tiles.createTilemap(hex`1000100001010101000000000100000100000100010001000101010101010101010001000100000000000000000001000000010001010101010100010100010101010100010000010000000001000100000000000101000100000000010000000101010001000001000101010101010000000100000000010000000000000000000001000101000000000101000101010101010000000001000000010000000000000100000101010100010100000100010001000001000000000001000101000000010000000001010101010001010001000000000100000000000000000100010001010101000101010101010001000100000000010000000001000000010000000100`, img`
2 2 2 2 . . . . 2 . . 2 . . 2 . 
2 . 2 . 2 2 2 2 2 2 2 2 2 . 2 . 
2 . . . . . . . . . 2 . . . 2 . 
2 2 2 2 2 2 . 2 2 . 2 2 2 2 2 . 
2 . . 2 . . . . 2 . 2 . . . . . 
2 2 . 2 . . . . 2 . . . 2 2 2 . 
2 . . 2 . 2 2 2 2 2 2 . . . 2 . 
. . . 2 . . . . . . . . . . 2 . 
2 2 . . . . 2 2 . 2 2 2 2 2 2 . 
. . . 2 . . . 2 . . . . . . 2 . 
. 2 2 2 2 . 2 2 . . 2 . 2 . 2 . 
. 2 . . . . . 2 . 2 2 . . . 2 . 
. . . 2 2 2 2 2 . 2 2 . 2 . . . 
. 2 . . . . . . . . 2 . 2 . 2 2 
2 2 . 2 2 2 2 2 2 . 2 . 2 . . . 
. 2 . . . . 2 . . . 2 . . . 2 . 
`, [myTiles.transparency16,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
