# Love Proposal Website for your love

This is a beautiful, animated website designed to express love and propose to your love. The website features multiple interactive sections, animations, and a special proposal at the end.

## Features

- Animated landing page with  name
- Beautiful gradient background with animated effects
- Multiple sections showcasing memories, reasons for love, and fun facts
- Interactive "No" button that runs away from the cursor
- Celebration animation with fireworks when "Yes" is clicked
- Fully responsive design for all devices
- Falling heart animations in the background

## How to Use

1. Open the `index.html` file in a web browser (Chrome, Firefox, or Edge recommended for the best experience)
2. Navigate through the sections by clicking the "Continue" buttons
3. Enjoy the animations and sweet messages
4. Reach the proposal section and pop the question!

## Customization

You can personalize this website further by:

### Adding Your Photos
1. To add real photos in the memory section:
   ```html
   <!-- Replace this: -->
   <div class="polaroid-content">
       <span>📷 Add your photo here</span>
   </div>
   
   <!-- With your actual image: -->
   <div class="polaroid-content">
       <img src="path-to-your-photo.jpg" alt="Description">
   </div>
   ```

### Changing the Love Start Date
1. In `script.js`, find this line:
   ```javascript
   const loveStartDate = new Date('2023-01-01').getTime(); // Change this date to your actual date
   ```
2. Replace '2023-01-01' with your actual date in 'YYYY-MM-DD' format

### Other Customizations
- Change colors in the `style.css` file
- Edit the reasons, memories, and fun facts in the JavaScript file
- Change the personal message in `script.js` by finding `const textToType = "..."`

## Technology Used

- HTML5
- CSS3 (with animations and transitions)
- JavaScript (vanilla JS, no frameworks)
- Animate.css library for additional animations
- SweetAlert2 for beautiful alert dialogs

## Make It Special!

Show this to your love in a quiet and romantic setting for the best effect. Consider having something special prepared for after she sees the website, like a small gift, flowers, or a romantic dinner.

Good luck with your proposal! ❤️ 
