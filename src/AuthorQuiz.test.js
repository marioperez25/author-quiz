import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {mount,shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorQuiz from './AuthorQuiz';

Enzyme.configure({
  adapter: new Adapter()
});

const state = {
  turnData: {
    books: ['The Adventures of Huckleberry Finn', 'book 2', 'book 3, return of the book'],
    author: {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn']
    },
    highlight: 'none'
  }
}

describe('AuthorQuiz', ()=> {

  it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
      <AuthorQuiz 
        {...state}
        onAnswerSelected={() => {}}
      />,
      div
    );
  })

  describe("When no answer selected", () => {
    let wrapper;

    beforeAll(()=>{
      wrapper = mount(
        <AuthorQuiz {...state} onAnswerSelected={() => {}}/>
      );
    });

    it("should not have bg color", () => {
      expect(
        wrapper.find("div.row.turn").props().style.backgroundColor
      ).toBe('')
    })
  })

})