import testimonyCSS from "./Testimony.module.css";
import Testimonies from "./testimonies/Testimonies";

const Testimony = () => {
  return (
    <section className={testimonyCSS.testimonyWrapper}>
      <p>Client feedback</p>
      <div className={testimonyCSS.header}>
        <h1>What Our Client Think About Our Gym</h1>
      </div>
      <div className={testimonyCSS.cardBox}>
        <Testimonies
          name="Tonya L. Jordan"
          profeesion="US Diplomat Deputy Executive Officer"
          content="Pinnacle International is a dedicated team 
          of professional trainers offering personalized fitness 
          regimens tailored to individual needs. They aim to change 
          mindsets about a healthy lifestyle and create lifelong 
          results in a welcoming and motivating atmosphere, making 
          it a highly recommended choice for clients seeking a 
          personalized fitness journey."
        />
        <Testimonies
          name="Carina Benitez"
          profeesion="Argentine ambassador to Nigeria"
          content="The activities that I like the most in the gym are 
          those specifically related to strength and endurance, cardio 
          training and abdominals. I highlight in the gym the commitment 
          of the coaches who focus on each client and what they want and 
          or need. I recommend it for the seriousness and the family atmosphere that they offer every day."
        />
        <Testimonies
          name="Alhaji Musa Mantu"
          profeesion="Development Economist Sits"
          content="I love the vibe and energy of Pinnacle Boxing Gymnasium. The trainers 
          and coaches are extremely friendly and very professional. Not to state the 
          fact that it's the best and most equipped Boxing gym in Abuja. Total Stress free zone"
        />
        <Testimonies
          name="Janine Scott"
          profeesion="Supervisory Executive Officer"
          content="Pinnacle International Fitness has done something no 
          other gym has ever been able to do for me. It has motivated me 
          to prioritize my health and well-being. Marcus Iwu has tailored 
          an approach to each client that addresses their particular area 
          of concern as it relates to their work out regime. What stands 
          out the most to me is that he won’t just let you do something 
          for the sake of doing it."
        />
        <Testimonies
          name="Dauda kwaji"
          profeesion="Md of Larida property investments "
          content="I personally love the fact that Pinnacle International 
          is a “meathead” gym. It’s not a poseur’s gym. I’m in the best 
          shape of my life thanks to Marcus and his trainers and their 
          unflinching dedication to get you to bring your heart to the 
          gym even when you don’t want to. The coaching is world class. "
        />
        <Testimonies
          name="Aisha Shushi"
          profeesion="Sambo Creative Director"
          content="The environment at The Pinnacle is so hygienic, would recommend 
          anyone who lives close by to register long term. Safe and fun environment 
          to workout."
        />
        <Testimonies
          name="Chris Shaiyen"
          profeesion="CEO Tipping point"
          content="Hands down, best choice I’ve made training at Pinnacle. 
          Friendly team who make me actually want to go train. I look forward 
          to walking through the doors and always feel amazing when I leave. 
          Coach Marcus and his team are bunch of nice guys who take an interest 
          in you no matter what fitness level you’re at."
        />
      </div>
    </section>
  );
};
export default Testimony;
