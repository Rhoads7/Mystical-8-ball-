const answers = ['Adjustments are required', 'Step out of your comfort zone', 'Show the world the real you', 'Surrender to the divine', 'Your dreams need a pratical plan', 'Bring love into the situation', 'Be bold and make the first move', 'Its time to release negitivity', 'Meditiate and contemplate', 'Look at the bigger picture', 'Its time to take action', 'Balance spirituality and practicality', 'A time to give rather than take', 'A personal issue reaches resolution', 'A win-win outcome is forecast', 'Nothing is yet set in stone', 'Conclusions are within reach', 'The end of a tough cycle apporaches', 'A new romantic cycle begins', 'A fiery climax approaches', 'Youre close to achieving your goal', 'A new start is coming', 'Prosperity lies ahead', 'Expect powerful change', 'The energy is gaining momentum', 'Luck is on your side', 'Confidence is your key to success', 'Work through your fears', 'Dont let your past hold you back', 'Have faith in your dreams', 'Communication is key', 'You are good enough', 'Believe in the impossible', 'Dont let pride get in your way','The answers you need are coming','Your hard work is paying off','You and your loved ones are safe','Take time to breathe out','A time for healing','What do you need to release?','Your commitment is being tested','Emotions are running high!','Hold your vision','Nothing will come of this situation'];


var god = document.getElementById("answerShown");





function returnText(){
   var testing = answers[Math.floor(Math.random()*answers.length)];

  document.getElementById("deposit").innerText = testing;  
}

