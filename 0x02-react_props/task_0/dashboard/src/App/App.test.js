import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
	  it("renders without crashing", () => {
		      const component = shallow(<App />);

		      expect(component).toBeDefined();
		    });
	  // it('should render a div with the class App-header', () => {
	//   // 	const component = shallow(<App />);
