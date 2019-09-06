import React from "react";
import { render , cleanup} from "@testing-library/react";

import App from './App'


afterEach(cleanup)

describe('<App />', ()=> {
    it('App renders without crashing', () => {
        render(<App/>)

    })
})
describe('<Display />', () => {
    it('Display renders without crashing', () => {
      const wrapper = render(<App />)
      expect(wrapper.getByText(/Display/i))
    })
  })

  describe('<Dashboard />', () => {
    it('Dashboard renders without crashing', () => {
      const wrapper = render(<App />)
      expect(wrapper.getByText(/Dashboard/i))
    })
  })



