  var qData = [
  { 
    q: "মার্কিন ফেড (US Fed) সুদের হার অপরিবর্তিত রাখার মূল উদ্দেশ্য কী?", 
    a: "মুদ্রাস্ফীতি নিয়ন্ত্রণ", 
    opts: ["মুদ্রাস্ফীতি নিয়ন্ত্রণ", "রপ্তানি বৃদ্ধি", "কৃষি উন্নয়ন", "বেকারত্ব বৃদ্ধি"] 
  },
  { 
    q: "Federal Reserve কোন দেশের কেন্দ্রীয় ব্যাংক?", 
    a: "USA", 
    opts: ["UK", "USA", "Canada", "Australia"] 
  },
  { 
    q: "পশ্চিমবঙ্গে সর্বোচ্চ ভোটদানের রেকর্ড কোন সংস্থা তত্ত্বাবধান করে?", 
    a: "Election Commission of India", 
    opts: ["NITI Aayog", "Election Commission of India", "RBI", "UPSC"] 
  },
  { 
    q: "PAI 2.0 রিপোর্টে কী মূল্যায়ন করা হয়?", 
    a: "পঞ্চায়েত কর্মক্ষমতা", 
    opts: ["শিল্প উৎপাদন", "শিক্ষা নীতি", "ব্যাংকিং সেক্টর", "পঞ্চায়েত কর্মক্ষমতা"] 
  },
  { 
    q: "PAI এর পূর্ণরূপ কী?", 
    a: "Panchayat Advancement Index", 
    opts: ["Public Assessment Index", "Panchayat Advancement Index", "Policy Action Index", "Planning Authority Index"] 
  },
  { 
    q: "গঙ্গা এক্সপ্রেসওয়ে প্রকল্প কোন রাজ্যে অবস্থিত?", 
    a: "Uttar Pradesh", 
    opts: ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Rajasthan"] 
  },
  { 
    q: "Ganga Expressway প্রকল্পের প্রধান লক্ষ্য কী?", 
    a: "সড়ক যোগাযোগ উন্নয়ন", 
    opts: ["কৃষি উৎপাদন বৃদ্ধি", "পর্যটন উন্নয়ন", "সড়ক যোগাযোগ উন্নয়ন", "শিক্ষা বিস্তার"] 
  },
  { 
    q: "“Namma 112” হেল্পলাইন কোন শহরের উদ্যোগ?", 
    a: "Bengaluru", 
    opts: ["Chennai", "Bengaluru", "Hyderabad", "Mumbai"] 
  },
  { 
    q: "Namma 112-তে ব্যবহৃত নতুন প্রযুক্তি কী?", 
    a: "AI-based multilingual system", 
    opts: ["Blockchain", "IoT", "Cloud computing", "AI-based multilingual system"] 
  },
  { 
    q: "RBI-এর নতুন Loan Restructuring নীতি কাদের জন্য?", 
    a: "দুর্যোগপীড়িত অঞ্চল", 
    opts: ["শিল্পপতি", "বিদেশি বিনিয়োগকারী", "দুর্যোগপীড়িত অঞ্চল", "ছাত্রছাত্রী"] 
  },
  { 
    q: "RBI-এর নতুন নীতি কবে থেকে কার্যকর?", 
    a: "১ জুলাই ২০২৬", 
    opts: ["১ জানুয়ারি ২০২৬", "১ জুলাই ২০২৬", "১ মার্চ ২০২৬", "১ মে ২০২৬"] 
  },
  { 
    q: "SEBI-এর PaRRVA সিস্টেমের মূল কাজ কী?", 
    a: "ডেটা রিপোর্টিং ও বিশ্লেষণ", 
    opts: ["কর সংগ্রহ", "বীমা নিয়ন্ত্রণ", "ঋণ প্রদান", "ডেটা রিপোর্টিং ও বিশ্লেষণ"] 
  },
  { 
    q: "PaRRVA সিস্টেম চালু হবে কবে?", 
    a: "৪ মে ২০২৬", 
    opts: ["১ জুন ২০২৬", "৪ মে ২০২৬", "১০ মে ২০২৬", "১ জুলাই ২০২৬"] 
  },
  { 
    q: "IN–SLN DIVEX 2026 মহড়ায় কোন দুই দেশ অংশ নেয়?", 
    a: "India–Sri Lanka", 
    opts: ["India–Sri Lanka", "India–USA", "India–Japan", "India–France"] 
  },
  { 
    q: "IN–SLN DIVEX মহড়ার প্রধান ক্ষেত্র কী?", 
    a: "Naval/Maritime", 
    opts: ["Air Force", "Cyber Security", "Naval/Maritime", "Space"] 
  },
  { 
    q: "Gaganyaan কর্মসূচি পরিচালনা করে কোন সংস্থা?", 
    a: "ISRO", 
    opts: ["DRDO", "ISRO", "NASA", "HAL"] 
  },
  { 
    q: "Gaganyaan-এ নতুন উদ্যোগ কী?", 
    a: "Civilian astronaut selection", 
    opts: ["Satellite launch", "Missile development", "Rocket testing", "Civilian astronaut selection"] 
  },
  { 
    q: "Maharashtra AI Policy 2026-এর মূল লক্ষ্য কী?", 
    a: "বিনিয়োগ ও কর্মসংস্থান বৃদ্ধি", 
    opts: ["কৃষি উন্নয়ন", "পর্যটন বৃদ্ধি", "বিনিয়োগ ও কর্মসংস্থান বৃদ্ধি", "প্রতিরক্ষা শক্তিশালীকরণ"] 
  },
  { 
    q: "AI Policy 2026 কোন রাজ্য অনুমোদন করেছে?", 
    a: "Maharashtra", 
    opts: ["Maharashtra", "Karnataka", "Gujarat", "Tamil Nadu"] 
  },
  { 
    q: "SEBI কোন ক্ষেত্র নিয়ন্ত্রণ করে?", 
    a: "Capital Market", 
    opts: ["Banking", "Insurance", "Capital Market", "Agriculture"] 
  }
];


var curQ = 0, userScore = 0, qTimer, secLeft = 15;


function beginQuizNow() {
    document.getElementById("start-area").style.display = "none";
    document.getElementById("quiz-main-container").style.display = "block";
    loadQuestion();
}


function loadQuestion() {
    
    if (curQ >= qData.length) { 
        showResult(); 
        return; 
    }

   
    document.getElementById("next-btn-container").style.display = "none";
    
    
    secLeft = 15;
    document.getElementById("timer-box").innerHTML = secLeft;
    document.getElementById("quiz-progress").innerHTML = "প্রশ্ন: " + (curQ + 1) + "/" + qData.length;
    document.getElementById("main-q-text").innerHTML = qData[curQ].q;
    
   
    var optsHtml = "";
    qData[curQ].opts.forEach(opt => {
        optsHtml += `<button class="opt-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
    });
    document.getElementById("main-opt-container").innerHTML = optsHtml;
    
    startTimer();
}


function startTimer() {
    clearInterval(qTimer);
    qTimer = setInterval(() => {
        secLeft--;
        document.getElementById("timer-box").innerHTML = secLeft;
        if (secLeft <= 0) { 
            clearInterval(qTimer);
            checkAnswer(null, ""); 
        }
    }, 1000);
}


function checkAnswer(btn, selected) {
    clearInterval(qTimer); 
    var correct = qData[curQ].a.trim();
    var btns = document.getElementsByClassName("opt-btn");
    
   
    for (let b of btns) {
        b.disabled = true;
        if (b.innerText.trim() === correct) {
            b.classList.add("correct-ans");
        }
    }

   
    if (selected.trim() === correct) {
        userScore++;
        document.getElementById("score-val").innerText = userScore;
    } else if (btn) {
        btn.classList.add("wrong-ans");
    }

    
    document.getElementById("next-btn-container").style.display = "block";
    
    
    curQ++;
}


function showResult() {
    document.getElementById("question-area").style.display = "none";
    document.getElementById("next-btn-container").style.display = "none";
    document.getElementById("result-area").style.display = "block";
    
    var finalScore = userScore;
    var totalQ = qData.length;
    var feedback = "";
    var color = "";

    if (finalScore === totalQ) {
        feedback = "Outstanding! 🌟";
        color = "#388e3c";
    } else if (finalScore >= totalQ * 0.8) {
        feedback = "Very Good! 👏";
        color = "#0d47a1";
    } else if (finalScore >= totalQ * 0.5) {
        feedback = "Good! 👍";
        color = "#f57c00";
    } else {
        feedback = "Need More Practice! 📚";
        color = "#d32f2f";
    }

    document.getElementById("res-score").innerHTML = `
        <div style="color: ${color}; font-weight: bold; margin-bottom: 10px; font-size: 1.5rem;">${feedback}</div>
        <div style="font-size: 2.5rem;">${finalScore} / ${totalQ}</div>
    `;
}