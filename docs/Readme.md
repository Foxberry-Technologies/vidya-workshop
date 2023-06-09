# HTML Code Documentation

The following is the documentation for the provided HTML code:

> 💡 Code auto-documented by ChatGPT 🤖

> 👉 See : [styles.css](./styles.css.md)

> 👉 See : [main.js](./main.js.md)


```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
```

The code represents the start of an HTML document. It includes the necessary CSS and font files using external links.

```html
  <header class="sticky-header">
    <div class="logo">
      <img src="https://www.siilc.edu.in/wp-content/uploads/2021/08/siilc-logo.png" alt="Logo">
    </div>
    <div class="action-links">
      <a href="#"><i class="fas fa-phone phone-icon"></i> 9594567890</a>
      <a href="mailto:admin@college.com"><i class="fas fa-envelope email-icon"></i> admin@college.com</a>
      <a href="https://api.whatsapp.com/send?phone=9594567890"><i class="fab fa-whatsapp whatsapp-icon"></i> 9594567890</a>
    </div>
  </header>
```

This section represents the header of the page, containing a logo and action links such as phone number, email, and WhatsApp contact.

```html
  <section class="banner-section">
    <div class="banner-background">
      <img src="https://www.siilc.edu.in/wp-content/uploads/2019/08/New-home-banner1.jpg" alt="Banner Background">
    </div>
    <div class="banner-content">
      <div class="left-section">
        <h2>Transformation through paving the</h2>
        <h1>path to progress</h1>
      </div>
      <div class="right-section">
        <form>
          <div class="form-group">
            <input type="text" placeholder="Name">
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email">
          </div>
          <div class="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
```

This section represents a banner section with a background image and content. It includes a form with fields for name, email, and message, and a submit button.

```html
  <section class="section-2">
    <div class="left-section">
      <blockquote>
        <p>
          <span class="empowering">Solving</span> critical challenges<br>
          through behavioral changes
        </p>
      </blockquote>
    </div>
    <div class="right-section">
      <img src="https://i.ibb.co/PNynh45/siilc-sample-3.png" alt="Image 1">
      <img src="https://i.ibb.co/vBzfz6m/siilc-sample-2.png" alt="Image 2">
      <img src="https://i.ibb.co/HzdVGcS/siilc-sample-1.png" alt="Image 3">
    </

div>
  </section>
```

This section represents a content section with a quote and images.

```html
  <section style="padding: 50px">
    <div>
      <div class="tab" onclick="showTab('tab1')"><i class="fas fa-graduation-cap"></i> Undergraduate Programmes</div>
      <div class="tab" onclick="showTab('tab2')"><i class="fas fa-graduation-cap"></i> Postgraduate Programmes</div>
      <div class="tab" onclick="showTab('tab3')"><i class="fas fa-graduation-cap"></i> Diploma and Certificate Programmes</div>
      <div class="tab" onclick="showTab('tab4')"><i class="fas fa-graduation-cap"></i> International Admissions</div>
      <div class="tab" onclick="showTab('tab5')"><i class="fas fa-graduation-cap"></i> PhD</div>
    </div>

    <div id="tab1" class="content" style="display: none;">
      <div class="course">BBA- Bachelor of Business Administration</div>
      <div class="course">BMS- Bachelor of Management Science</div>
      <div class="course">BFA- Bachelor of Fine Arts</div>
      <div class="course">BEM- Bachelor of Event Management</div>
      <div class="course">Integrated Law Course- BA + LL.B</div>
    </div>

    <div id="tab2" class="content" style="display: none;">
      <div class="course">BJMC- Bachelor of Journalism and Mass Communication</div>
      <div class="course">BFD- Bachelor of Fashion Designing</div>
      <div class="course">BSW- Bachelor of Social Work</div>
      <div class="course">BBS- Bachelor of Business Studies</div>
      <div class="course">BTTM- Bachelor of Travel and Tourism Management</div>
    </div>

    <div id="tab3" class="content" style="display: none;">
      <div class="course">Aviation Courses</div>
      <div class="course">B.Sc- Interior Design</div>
      <div class="course">B.Sc.- Hospitality and Hotel Administration</div>
      <div class="course">Bachelor of Design (B. Design)</div>
      <div class="course">Bachelor of Performing Arts</div>
    </div>

    <div id="tab4" class="content" style="display: none;">
      <div class="course">BA in History</div>
    </div>

    <div id="tab5" class="content" style="display: none;">
      <div class="course">PhD Course 1</div>
      <div class="course">PhD Course 2</div>
      <div class="course">PhD Course 3</div>
      <div class="course">PhD Course 4</div>
      <div class="course">PhD Course 5</div>
    </div>
  </section>
```

This section contains a tabbed content area with different programs listed under each tab.

```html
  <section class="section-4">
    <div class="left-section">
      <h2>Our Offerings</h2>
      <h1>"Post Graduate Programme in Business Management"</h1>
      <a href="#" class="enroll-btn">ENROLL NOW</a>
    </div>
    <div class="right-section"></div>
  </section

>
```

This section represents a section with offerings, including a title, description, and an enrollment button.

```html
  <footer>
    &copy; SIMACES Learning 2023
  </footer>
```

This is the footer section that includes the copyright information.

```html
  <div class="chat-icon">
    <i class="fas fa-comment"></i>
  </div>
  
  <div class="chat-window">
    <div class="header">
      <h3>Chatbot</h3>
      <button class="close-btn">&times;</button>
    </div>
    <div class="messages">
      <div class="message incoming">
        <p>Hello! How can I assist you today?</p>
      </div>
    </div>
    <div class="input-area">
      <input type="text" placeholder="Type your message...">
      <button class="send-btn">Send</button>
    </div>

    <div class="chips">
      <div class="chip" onclick="selectChip(1)">Admission Requirements</div>
      <div class="chip" onclick="selectChip(2)">Undergraduate programs</div>
      <div class="chip" onclick="selectChip(3)">Postgraduation Fees</div>
      <div class="chip" onclick="selectChip(4)">International Admissions</div>
      <div class="chip" onclick="selectChip(5)">PhD</div>
    </div>
  </div>
```

These sections represent a chat icon and chat window for a chatbot. The chat window includes a header, messages area, input area, and a set of clickable chips for predefined options.

```html
  <script src="main.js"></script>
</body>
</html>
```

This script tag includes a reference to the "main.js" file, which is likely responsible for handling the interactive behavior and functionality of the webpage.

This concludes the documentation of the provided HTML code.