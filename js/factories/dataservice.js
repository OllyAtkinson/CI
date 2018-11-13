/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            //correctAnswers: correctAnswers,
            A: A,
            P: P,
            E: E,
            I: I
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */
     //MARKING THE CORRECT ANSWERS, SEE quizmetrics.js FOR METHODS 
    //var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0];
    var A = [0, 0, 4, 4, 0, 1, 4, 4, 1, 4, 0, 4, 4, 0, 4, 4, 0, 0];
    var P = [1, 1, 4, 4, 1, 0, 4, 4, 0, 4, 1, 4, 4, 1, 4, 4, 1, 1];
    var E = [4, 4, 0, 1, 4, 4, 0, 1, 4, 0, 4, 1, 0, 4, 0, 0, 4, 4];
    var I = [4, 4, 1, 0, 4, 4, 1, 0, 4, 1, 4, 0, 1, 4, 1, 1, 4, 4];

    var quizQuestions  = [
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I am often direct and frank in team meetings"
                },
                {
                    answer: "I tend to be reserved in team meetings"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I take control when the team is confronted with a crisis situation"
                },
                {
                    answer: "I tend to be more reflective and to see what happens before taking actions when a crisis occurs"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "My decision making is usually based on intuition and feelings that I have or that are raised by team members"
                },
                {
                    answer: "My decision making is usually based on facts, logic and specific information that I have or that is communicaed by team members"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I tend not to express my emotions and feelings to team members"
                },
                {
                    answer: "I often express my emotions and feelings to team members"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I usually contribute information or add to discussions and team conversations"
                },
                {
                    answer: "I seldom contribute to discussions or team conversations since I prefer that they solve their own problems"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I am careful and contemplative about taking risks and accepting new, difficult challenges where the team could fail"
                },
                {
                    answer: "I am quick to take risks and accept new, difficult challenges even though some may be difficult for the team to accomplish"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "My facial expressions and enthusiam when conveying my views or responding to the views of others are greater than most people I know"
                },
                {
                    answer: "I tend to be less demonstrative in my facial expressions and enthusiasm when conveying my views or in responding to the views of team members"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I am usually a bit difficult to get to know in interpersonal and business situations"
                },
                {
                    answer: "I feel like i am easy to get to know in both interpersonal and business situations"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I usually make decisions deliverately, more slowly and with forethought when I know my team will be affected"
                },
                {
                    answer: "I usually make decisions quickly, spontaneously and in the heat of the moment"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I am able to adapt to changing schedules and the whims of individuals around me"
                },
                {
                    answer: "I am more rigid and disciplined about how I spend my time"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I tend to use strong language and sometimes expressive gestures in communicating to team members, and I feel comfortable in stating my opinions"
                },
                {
                    answer: "I tend not to raise my voice, use a harsh tone or use dramatic gestures to express my views, feelings and opinions"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I emphasize planning and detailed information about who should do what, how it should be done and when"
                },
                {
                    answer: "I emphasize spontaneity and excitement, unplanned events that capture my attention"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "My conversations with team members focus on personal experiences and other people in my life"
                },
                {
                    answer: "My conversations with team members focus on my job, professional experiences and the work of other people"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I tend to sometimes bend the rules to fit my needs and the team's needs"
                },
                {
                    answer: "I always follow policies and rules in getting things done and encourage my team members to do the same"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "My body language and facial expressions tell people right away, and with little doubt, what I am thinking and feeling"
                },
                {
                    answer: "My body language and facial expressions tend to be more reserved as to disguise my true feelings and personal thoughts from team members"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I like to be out among my team members to get things done and to elicit their ideas"
                },
                {
                    answer: "I prefer to work alone and not be encumbered by the thoughs, ideas and feelings of other team members"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I enjoy introducing myself to new team members and am willing to talk to them about myself and personal matters"
                },
                {
                    answer: "I usually let new team members introduce themselves to me rather than approach them first and I am relecutant to get too personally inolved"
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "In expressing myself and my views to the team, I often use dramatic statements such as 'I think...', 'I feel...' and 'I believe that...'"
                },
                {
                    answer: "In expressing myself and my views to the team, I often use statements that defend and justify my beliefs such as 'According to others I have spoken to...', 'Based on previous conversations...' and 'Others have found that'..."
                },
            ],
            selected: null,
            correctA: null,
            correctP: null,
            correctE: null,
            correctI: null
        }
    ];




    var turtlesData = [
        {
            type: "Targeted",
            image_url: "introvert.jpeg",
            known: "Direct, Strong-Willed, Controlling, Driven, Independent, Pragmatic, Efficient, Purposeful, Forced, Ambitious",
            advantage: "Focsed on outcomes and is competitive to succeed.",
            disadvantage: "Can be viewed as forceful, often takes risks.",
            description: "If you demonstrate a dominance or proficiency toward Targeted communication you need control, independence and accomplishment.  Your desire to meet these innate needs drives your actions and decision making.  As a result, you will probably be viewed as a ‘no-nonsense’ task oriented person.  You believe that direct, concise honest communication is best so that everyone knows where they stand.  As someone who communicates using the Targeted communication style you thrive on competition and don’t understand those that don’t.  You tend to work at a faster pace than other people are fully focused on goals and results – individually and collectively.  You naturally gravitate to positions of authority because your Targeted approach matches that of a typical authoritative leader.  If your decisiveness leads to positive results you may be identified as a high-potential and fast tracked for promotion.  "
        },
        {
            type: "Enthusiastic",
            image_url: "extrovert.jpeg",
            known: "Spirited, Expressive, Visionary, Vivacious, Energetic, Intepid, Active, Adventurous, Enterprising, Feisty",
            advantage: "Build strong relationships and good at motivating others.",
            disadvantage: "Can be melodramatic and prone to exaggeration, sometimes too impulsive.",
            description: "If you demonstrate a dominance or proficiency toward Enthusiastic communication you need recognition, approval, involvement and fun.  Your desire to meet these innate needs drives your action and decision making.  As a result, you tend to be more focused on the people and relationships in the team rather than necessarily the task or goal.  You believe that if you get those relationships right the tasks will look after themselves.  You enjoy teamwork and relish the interpersonal dynamics of working with others.  Having fun is important to you.  You believe that encouraging others and inviting discussion, opinion and ideas from different people is the best way to generate involvement and smart solutions.  Unsurprisingly, you are enthusiastic and friendly and tend to get the best out of others through encouragement and persuasion rather demands and force.  As someone who communicates the Enthusiastic communication style you love the spotlight and are energised by others.  You are well suited to a high-profile positions where you are the face of the business or team."
        },
        {
            type: "Methodical",
            image_url: "passive.jpeg",
            known: "Systematic, Logical, Organised, Dependable, Precise, Consistent, Practical, Orderly, Planned, Meticulous",
            advantage: "Precise and make deicisons based on facts, usually organised and focuses on analysis and details.",
            disadvantage: "Can come across as insensitive/uncaring and are overly focussed on detail, slow and don't like taking risks.",
            description: "If you demonstrate a dominance or proficiency toward Methodical communication you need to be right, accurate and you need time to be alone.  Your desire to meet those innate needs drives your actions and decision making.  As a result, you tend to be more focused on analysis, facts and details as they offer a way to demonstrate the validity of your approach.  You are more focused on tasks and goals because they are easier to measure in terms of whether they were done correctly or not.  People are harder to manage although you will often seek to create a climate where team rules are encouraged and followed so as to circumvent his innate unpredictability.  You pride yourself on your accuracy and objectivity – pointing to facts and data not opinion as evidence for a decision or action.  You are gifted problem solver because you are happy to deconstruct the problem and find out exactly what is going on so you can find the right and most effective solution.  Needless to say, you like order and prefer and organised and structured working environment with robust guidelines.  As someone who communicates using the Methodical communication style you are happiest when you know what you need to do and are free to pursue that object independently.  Ideally the task should have a ‘right way’ to achieve the outcome. "
        },
        {
            type: "Accomodating",
            image_url: "assertive.jpeg",
            known: "Considerate, Thoughtful, Cooperative, Supportive, Attentive, Obliging, Caring, Tactful, Sensitive, Compassionate",
            advantage: "Great listener, reliable and trustworthy, enjoy being part of a team.",
            disadvantage: "Don't possess leadership qualities and sometimes don't speak thier mind in order to avoid conflict.",
            description: "If you demonstrate a dominance or proficiency toward Accommodating communication you need personal assurance, comfort, direction and sincerity.  Your desire to meet these innate needs drives your actions and decision making.  As a result, you tend to be more focused on team harmony and steadiness.  You believe that if you can foster a team climate of trust, dependability and security the team will thrive and get stuff done.  You value personal relationships without any drama.  You are often the person other people come to for advice because you are compassionate, considerate and a great listener.  You are the ‘steady eddy’ in the group – the person that can be relied upon.  As someone who communicates using the Accommodating communication style you are well suited to professions that require you to care about or for others. "
        },

    ];

})();
