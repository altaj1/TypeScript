// ts-node-dev --respawn --transpile-only genericArray/2.1.ts
{
    // 
    type GenericArray <T> = Array<T>;
    const rollNumbers: GenericArray<number> = [3,6,8];
    const bolArray: GenericArray<boolean> = [true, false, false, true]
    console.log(bolArray)
    // 
}