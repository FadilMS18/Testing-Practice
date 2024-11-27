import reverse from "./reverse.js";


test("Should return reversed string", ()=>{
    expect(reverse('not reverse')).toBe('esrever ton')
    expect(reverse('Naruto')).toBe('oturaN')
    expect(reverse('Godzilla')).toBe('allizdoG')
})
