document.addEventListener('DOMContentLoaded', () => {
    const faqs = [
        {
            "question": "What is MyPride Games?",
            "answer": "MyPride Games is an online gaming platform by AsprideTech Solutions Pvt Ltd, offering popular games like Ludo, Rummy, and soon-to-be-launched Poker and Fantasy Sports. Players can participate in games, compete with others, and win real money."
        },
        {
            "question": "Which games are available on MyPride Games?",
            "answer": "Currently, we offer MyPride Ludo and MyPride Rummy. More games like Poker and Fantasy Sports will be available soon."
        },
        {
            "question": "How do I create an account?",
            "answer": "You can create an account by signing up with a mobile number on the MyPride Games app or website. You will need to verify your identity to start playing."
        },
        {
            "question": "Why do I need to verify my identity?",
            "answer": "Identity verification is essential to ensure that all players are real, eligible, and of legal age to participate. It also helps in securing your account and withdrawals."
        },
        {
            "question": "What documents are required for verification?",
            "answer": "We require a government-issued ID proof (e.g., Aadhar card, PAN card) and a bank account verification to ensure your identity and secure your winnings."
        },
        {
            "question": "How do I deposit money into my account?",
            "answer": "You can deposit money using various payment methods like UPI, debit/credit cards, or net banking. Just go to the 'Wallet' section and choose your preferred payment method."
        },
        {
            "question": "Is there a minimum deposit amount?",
            "answer": "Yes, the minimum deposit amount is ₹50."
        },
        {
            "question": "How do I withdraw my winnings?",
            "answer": "You can withdraw your winnings by going to the 'Withdraw' section in your account. Enter the amount you wish to withdraw and choose your verified bank account. The amount will be transferred to your account immediately, typically within a few minutes."
        },
        {
            "question": "Is there a withdrawal limit?",
            "answer": "Yes, the minimum withdrawal amount is ₹100."
        },
        {
            "question": "Are there any fees for deposits or withdrawals?",
            "answer": "We do not charge any fees for deposits. However, a small processing fee may apply to withdrawals, depending on the payment method and amount."
        },
        {
            "question": "Is my money safe with MyPride Games?",
            "answer": "Yes, your money is completely safe with us. We use industry-standard encryption and security measures to protect your financial transactions and personal information."
        },
        {
            "question": "What should I do if I suspect fraudulent activity on my account?",
            "answer": "If you suspect any unauthorized activity on your account, please contact our support team immediately at support@mypridegames.com."
        },
        {
            "question": "Is playing on MyPride Games legal?",
            "answer": "Yes, playing skill-based games like Ludo and Rummy for real money is legal in most states in India. However, our platform is not available in Andhra Pradesh, Arunachal Pradesh, Assam, Meghalaya, Nagaland, Telangana, Sikkim, and outside India."
        },
        {
            "question": "Why can’t I play from certain states?",
            "answer": "Due to state laws and regulations, our platform is not available in certain states like Andhra Pradesh, Arunachal Pradesh, Assam, Meghalaya, Nagaland, Telangana, and Sikkim. Players from these states are not allowed to participate in real-money games."
        },
        {
            "question": "What happens if I travel to a restricted state?",
            "answer": "If you are in a restricted state, you will not be able to participate in real-money games. We recommend not attempting to play while in these regions to avoid any issues with your account."
        },
        {
            "question": "How can I contact customer support?",
            "answer": "You can contact our customer support team via email at support@mypridegames.com or through the live chat feature on our app."
        },
        {
            "question": "What should I do if I encounter a technical issue?",
            "answer": "If you face any technical issues while playing or using the app, please contact our support team with details of the problem. We’ll work to resolve it as quickly as possible."
        },
        {
            "question": "Where can I find the latest updates and news?",
            "answer": "You can find the latest updates, news, and announcements on our official website, social media channels, and through notifications in the app."
        }
    ];

    const faqsContainer = document.getElementById('faqs-container');

    faqs.forEach((faq, index) => {
        const faqElement = document.createElement('div');
        faqElement.classList.add('faq-item');
        faqElement.innerHTML = `
            <div class="faq-header">
                <span class="icon">+ </span>
                <span class="question">${index + 1}.&ensp;  ${faq.question}</span>
            </div>
          <div class="answer">
  <span style="font-weight: bold; color: dark;">Answer:</span> ${faq.answer}
</div>
        `;

        faqElement.addEventListener('click', () => {
            const answerElement = faqElement.querySelector('.answer');
            const iconElement = faqElement.querySelector('.icon');
            if (answerElement.style.maxHeight) {
                answerElement.style.maxHeight = null;
                iconElement.textContent = '+';
            } else {
                answerElement.style.maxHeight = answerElement.scrollHeight + "px";
                iconElement.textContent = '-';
            }
        });

        faqsContainer.appendChild(faqElement);
    });
});
