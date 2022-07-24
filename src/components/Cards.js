import React from 'react';
import './Cards.css';
import CardItem from './CardItem';




function Cards() {
  return (
    <div className='cards'>
      <h1>PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem 
                projectUrl="https://goldenwingsportfolioapp.netlify.app"  
                src='images/c1.png'
                text='Golden Wings Aviation Flight School (Course Booking Website)'
                label='HTML, CSS and Javascript'   
                />
            <CardItem 
                projectUrl="https://paulamanese.netlify.app"  
                src='images/c11.png'
                text='My First Version Of My Portfolio (Coded From Zero Knowledge)'
                label='HTML and CSS'   
                />
             <CardItem 
                projectUrl="https://paowiseukeopii.netlify.app"  
                src='images/c3.png'
                text='Paowiiseukeopii Korean Brand (Coffee Shop Website)'
                label='HTML and CSS'  
            />
          </ul>
          <ul className='cards__items'>
             <CardItem 
                projectUrl="https://regie-almoite.github.io/Parogie/"  
                src='images/c7.png'
                text='Parôgiè Boutique Hotel  ( Booking App Website)'
                label='HTML, CSS and JavaScript'   
                />
             <CardItem 
               projectUrl="https://adventuretimenipaowii.netlify.app/"  
               src='images/c5.png'
               text='Adventure Time Ni Paowii (Personal Blog Website)'
               label='HTML and CSS'      
               />
              <CardItem 
               projectUrl="https://greenrecipefoodblog.netlify.app"  
               src='images/c4.png'
               text='Green Recipe Food Blog (Recipe Website) CFG'
               label='HTML and CSS' 
               />
            </ul>
            <ul className='cards__items'>
              <CardItem 
              projectUrl="https://paulamanese.github.io/kodegoexercise1-week5-javascript-rockscissorpapergame/"  
              src='images/c9.png'
              text='Rock, Scissors and Paper Onlin Game (Human Versus Computer)'
              label='HTML, CSS and Javascript'   
              />
              <CardItem 
               projectUrl="https://supremeclothing.netlify.app"  
               src='images/c8.png'
               text='Supreme Clothing Mens Online Shop (E-commerce Website)'
               label='HTML and CSS'   
              />
              <CardItem 
                projectUrl="https://qrcodecomponentchallenge.netlify.app"  
                src='images/c12.png'
                text='QR Component Styling (Front-End Design Challenge)'
                label='HTML and CSS'      
              />
             </ul>

            <ul className='cards__items'>
              <CardItem 
                projectUrl="https://kodegoexercises2-week2-testimonialpage.netlify.app"  
                src='images/c13.png'
                text='Testimonial Styling Positions (Make-up Review Page)'
                label='HTML, CSS and Bootstrap'   
                />
                <CardItem 
                projectUrl="https://kodegoexercise3-week2-onlinelibrary-bootstraponly.netlify.app/"  
                src='images/c15.png'
                text='Online Library Catalogue Project(Design Styling Exercises)'
                label='HTML, CSS and Bootstrap'   
                />
                <CardItem 
                  projectUrl="https://codepen.io/paowiicarina/pen/GRNPojV"  
                  src='images/c17.png'
                  text='Starbucks Sample Survey Form (From FreecodeCamp Activity)'
                  label='HTML and CSS '   
                />
            </ul>

            <ul className='cards__items'>
              <CardItem 
                projectUrl="https://paulamanese.github.io/kodegoexercise1-week5-javascriptconditionals-conversiontable/"  
                src='images/c22.png'
                text='Weight Conversion From Kilograms (Javascript Conditionals)'
                label='HTML, CSS and Javascript'   
                />
                <CardItem 
                projectUrl="https://paulamanese.github.io/mytodolistapp/"  
                src='images/c23.png'
                text='To Do List With Current Date (Online Task Helper App)'
                label='HTML, CSS and Javascript'   
                />
                <CardItem 
                  projectUrl="https://paulamanese.github.io/myreactweatherapp"  
                  src='images/c24.png'
                  text='Weather App Online Made From React with API '
                  label='HTML, CSS, and React'   
                />
            </ul>

            <ul className='cards__items'>
              <CardItem 
                projectUrl="https://codepen.io/paowiicarina/pen/jOVdjGd"  
                src='images/c19.png'
                text='React Documentation (Designing The File Info Page)'
                label='HTML and CSS'  
            
              />
              <CardItem 
               projectUrl="https://codepen.io/paowiicarina/pen/KKZQqwG"  
               src='images/c18.png'
               text='Albert Einstein Profile (From FreecodeCamp Activity)'
               label='HTML Only'   
              />
              <CardItem 
                projectUrl="https://codepen.io/paowiicarina/pen/jvbBLv"  
                src='images/c20.png'
                text='My First HTML Website (From FreecodeCamp Activity)'
                label='HTML Only'   
              />
              <CardItem 
              projectUrl="https://budgetapp-one.vercel.app/"  
              src='images/c25.png'
              text='Budget Tracking App (Online Productivity Tool)'
              label='HTML, CSS, and Next.Js'   
            />

            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
