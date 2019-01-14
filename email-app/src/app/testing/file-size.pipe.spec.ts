import { FileSizePipe } from "./file-size.pipe";


describe('FileSizePipe', () => {
    
 


  describe('Isolated FileSizePipe test', () => {

    const pipe = new FileSizePipe;

    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should override the extension when supplied', () => {
      expect(pipe.transform(123456789, 'myext')).toBe('117.74myext');
      expect(pipe.transform(987654321, 'anotherext')).toBe('941.90anotherext');
    });
  })
   

})