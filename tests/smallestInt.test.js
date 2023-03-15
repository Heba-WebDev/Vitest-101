import { it, describe, expect } from "vitest";
import smallestInt from "./smallestInt";


describe('smallestInt', () => {
    
     it('should throw an error if the argument is not an array', () => {
        expect(() => smallestInt("string")).toThrow("Not a valid argument")
    })
    
    
     it('should be return smallest number in an array', () => {
        expect(smallestInt([2,4,5,88,0,1])).toBe(0);
    })
    
    
    it('should be return smallest number in an array', () => {
        expect(smallestInt([5,6,90,123,657,4])).toBe(4);
    })
})



