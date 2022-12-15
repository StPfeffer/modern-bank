import React from 'react';
import { feedback } from '../constants';
import { FeedbackCard } from '../components';
import styles, { layout } from '../style';

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* TO-DO */}
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

    <div className='w-full flex justify-between items-center flex-col mb-6 relative z-[1] md:flex-row sm:mb-16'>
      <h1 className={styles.heading2}>
        What are people <br className='hidden sm:block' />saying about us
      </h1>
      <div className='w-full mt-6 md:mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    <div className='flex flex-wrap w-full relative z-[1] feedback-container justify-center sm:justify-start'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials