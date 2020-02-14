import { TestBed } from "@angular/core/testing";
import { TodoService2 } from "./todo2.service";

describe("TodoService2", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TodoService2 = TestBed.get(TodoService2);
    expect(service).toBeTruthy();
  });
});
