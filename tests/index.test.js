/**
 * @jest-environment jsdom
 */
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Using render and screen from test-utils.js instead of
// @testing-library/react
// import { render, screen, fireEvent, cleanup } from "./test-utils";
import IndexPage from "@pages/index";

Enzyme.configure({ adapter: new Adapter() })
const props = {
  "Quotes": [
    "Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace.",
    "Any dog under fifty pounds is a cat and cats are useless.",
    "What's cholesterol?",
    "Once a year, every branch of this government meets in a room and announces what they intend to waste taxpayer money on.",
    "I love riddles!",
    "There must be a mistake, you've accidentally given me the food that my food eats.",
    "Every time she laughs, an angel dies. Even telemarketers avoid her. Her birth was payback for the sins of man. But you know the worst thing about her? She works for the library.",
    "Live your life how you want, but don’t confuse drama with happiness.",
    "Every two weeks I need to sand down my toe nails. They're too strong for clippers.",
    "In my opinion, not enough people have looked their dinner in the eyes and considered the circle of life.",
    "People who buy things are suckers.",
    "An ideal night out, to me, is stepping onto my porch area and grilling up a thick slab of something’s flesh and then popping in a highlight real from the WNBA.",
    "Dear frozen yogurt, you are the celery of desserts. Be ice cream or be nothing. Zero stars.",
    "Just give me all the bacon and eggs you have. Wait...wait. I worry what you just heard was: Give me a lot of bacon and eggs. What I said was: Give me all the bacon and eggs you have. Do you understand?",
    "Please and thank you.",
    "On nights like this when the cold winds blow, the air is awash in the swirling eddies of our dream, come with me and find safe haven in a warm bathtub full of my jazz.",
    "It’s pointless for a human to paint scenes of nature when they can go outside and stand in it.",
    "The whole point of this country is if you want to eat garbage, balloon up to 600 pounds and die of a heart attack at 43, you can! You are free to do so. To me, that’s beautiful.",
    "Standard birth control methods are usually ineffective against a Swanson.",
    "On my deathbed, my final wish is to have my ex-wives rush to my side so I can use my dying breath to tell them both to go to hell one last time.",
    "I'm going to get 12 eggs and part of a dead animal. Dealer's choice. Please and thank you.",
    "The key to burning an ex-wife effigy is to dip it in paraffin wax and then toss the flaming bottle of isopropyl alcohol from a safe distance. Do not stand too close when you light an ex-wife effigy.",
    "Capitalism: God's way of determining who is smart and who is poor.",
    "Son, there is no wrong way to consume alcohol.",
    "Fish, for sport only, not for meat. Fish meat is practically a vegetable.",
    "Capitalism is the only way … It makes America great, England OK and France terrible.",
    "I don't want to paint with a broad brush here, but every single contractor in the world is a miserable, incompetent thief.",
    "It's always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.",
    "Don't waste energy moving unless necessary.",
    "I've never been hungover. After I've had too much whiskey, I cook myself a large flank steak, pan fried and salted butter. I eat that, put on a pair of wet socks and go to sleep.",
    "The three most useless jobs in the world in order are: lawyer, congressman, and doctor.",
    "I like some changes. Like when I change a tree into a canoe, or a wife into an ex-wife.",
    "Turkey can never beat cow.",
    "First rule. No conversation lasts longer than 100 total words.",
    "An hour ago a giant fireball consumed my entire face and it was far preferable to spending another second with you.",
    "I leave no meat behind. It’s an honor thing.",
    "I've cried twice in my life. Once when I was seven and hit by a school bus. And then again when I heard that Li'l Sebastian has passed.",
    "Sting like a bee. Do not float like a butterfly. That’s ridiculous.",
    "Well, I am not usually one for speeches. So, goodbye.",
    "Honor: if you need it defined, you don't have it.",
    "History began July 4th, 1776. Anything before that was a mistake.",
    "Creativity is for people with glasses who like to lie.",
    "Say what you want about organized religion, but those bastards knew how to construct an edifice.",
    "There has never been a sadness that can’t been cured by breakfast food.",
    "Shorts over six inches are capri pants, shorts under six inches are European.",
    "I love nothing.",
    "Children are terrible artists and artists are crooks.",
    "Give a man a fish and feed him for a day. Don't teach a man to fish… and feed yourself. He's a grown man. And fishing's not that hard.",
    "There are three acceptable haircuts: high and tight, crew cut, buzz cut.",
    "It's an impossible puzzle, and I love puzzles!"
  ],
  "votes": [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "QuoteCount": 10,
  "handleIncrease": "ƒ handleIncrease() {}",
  "handleDecrease": "ƒ handleDecrease() {}"
}
describe("HomePage Tests", () => {
  // afterEach(cleanup);

  it("Loading homepage", () => {
    const wrapper = mount(<IndexPage />)
    expect(wrapper.instance().state.votesArr.length).toBe([50])
  })
  
  it("Increment vote test", () => {
    const wrapper = mount(<IndexPage />)
    expect(wrapper.instance().state.votesArr).toBe(this.props.votesArr)
    wrapper.instance().handleIncrease(3)
    expect(wrapper.instance().state.votesArr).toBe([0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  })
  it("Decrement votes test", () => {
    const wrapper = mount(<IndexPage />)
    expect(wrapper.instance().state.votesArr).toBe(this.props.votesArr)
    wrapper.instance().handleDecrease(3)
    expect(wrapper.instance().state.votesArr).toBe([0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  })
});
describe("Header Tests", () => {
  // afterEach(cleanup);
  it("Header renders correctly", () => {
    render(<IndexPage />)
    const heading = screen.getByText(
      /Ron Swanson Quote Voter/i
    )
    expect(heading).toBeInTheDocument();
  
  })
})