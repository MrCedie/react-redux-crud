describe("sample test", () => {
  test("success add", () => {
    const add = 1 + 1;
    expect(add).toBe(2);
  });

  test("failed add", () => {
    const add = 1 + 1;
    expect(add).toBe(3);
  });
});
