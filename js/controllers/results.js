/*
 * IIFE to encapsulate code and avoid global variables
 */
(function(){

    /*
     * attaching results controller function to the commFacts module 
     */
    angular
        .module("commFacts")
        .controller("resultsCtrl", ResultsController);

    /*
     * injecting the custom service quizMetrics into the results controller 
     * using the $inject method.
     *
     * Injecting dependencies like this is done so as to avoid issues when 
     * uglifying the code. Function arguments will get shortened during the 
     * uglify process but strings will not. Therefore by injecting the argument
     * as strings in an array using the $inject method we can be sure angular 
     * still knows what we want to do.
     */
    ResultsController.$inject = ['quizMetrics', 'DataService'];

    /*
     * definition of the results controller function itself. Taking 
     * quizMetrics as an argument
     */
    function ResultsController(quizMetrics, DataService){
        var vm = this;

        /*
         * The pattern used in the controllers in this app puts all the 
         * properties and methods available to the view at the top of the 
         * function. Any methods are referenced as named functions which are 
         * defined at the bottom.
         *
         * This allows the interface of the controller to be seen at a glance. 
         * Which is not usually the case when defining methods as anon 
         * functions inline.
         */
        vm.quizMetrics = quizMetrics; // binding the object from factory to vm 
        vm.dataService = DataService;
        vm.getAnswerClass = getAnswerClass; // named function defined below
        vm.setActiveQuestion = setActiveQuestion; // named function defined below
        vm.reset = reset; // named function defined below
        vm.calculatePerc = calculatePerc; // named function defined below
        vm.calculateX = calculateX;
        vm.calculateY = calculateY;
        vm.findCommType = findCommType;
        vm.activeQuestion = 0;
        vm.getBarChart = getBarChart;
        vm.getPDF = getPDF;
        vm.findCommInfo = findCommInfo;

        function calculatePerc(){
            /*
             * simply calculating the percentage of correct answers and returning the number
             */
            return quizMetrics.ACorrect / DataService.quizQuestions.length * 100;
        }


        function calculateX(){
            xValue = quizMetrics.ACorrect - quizMetrics.PCorrect;
            //return xValue;
        }


        function calculateY(){
            yValue = quizMetrics.ECorrect - quizMetrics.ICorrect;
            //return yValue;
        }



        
        function findCommType(){
            if (yValue > 0 && xValue > 0){
                finalResult = "Enthusiastic";
            }
            else if (yValue > 0 && xValue < 0){
                finalResult = "Targeted";
            }
            else if (yValue < 0 && xValue > 0){
                finalResult = "Accomodating";
            }
            else if (yValue < 0 && xValue < 0){
                finalResult = "Methodical";
            }
            else{
                finalResult = "Unconclusive";
            }
            return finalResult;
        }




        function findCommInfo(){
            if (yValue > 0 && xValue > 0){
                finalInfo = "If you demonstrate a dominance or proficiency toward Enthusiastic communication you need recognition, approval, involvement and fun.  Your desire to meet these innate needs drives your action and decision making.  As a result, you tend to be more focused on the people and relationships in the team rather than necessarily the task or goal.  You believe that if you get those relationships right the tasks will look after themselves.  You enjoy teamwork and relish the interpersonal dynamics of working with others.  Having fun is important to you.  You believe that encouraging others and inviting discussion, opinion and ideas from different people is the best way to generate involvement and smart solutions.  Unsurprisingly, you are enthusiastic and friendly and tend to get the best out of others through encouragement and persuasion rather demands and force.  As someone who communicates the Enthusiastic communication style you love the spotlight and are energised by others.  You are well suited to a high-profile positions where you are the face of the business or team.";
            }
            else if (yValue > 0 && xValue < 0){
                finalInfo = "If you demonstrate a dominance or proficiency toward Targeted communication you need control, independence and accomplishment.  Your desire to meet these innate needs drives your actions and decision making.  As a result, you will probably be viewed as a ‘no-nonsense’ task oriented person.  You believe that direct, concise honest communication is best so that everyone knows where they stand.  As someone who communicates using the Targeted communication style you thrive on competition and don’t understand those that don’t.  You tend to work at a faster pace than other people are fully focused on goals and results – individually and collectively.  You naturally gravitate to positions of authority because your Targeted approach matches that of a typical authoritative leader.  If your decisiveness leads to positive results you may be identified as a high-potential and fast tracked for promotion.";
            }
            else if (yValue < 0 && xValue > 0){
                finalInfo = "If you demonstrate a dominance or proficiency toward Accommodating communication you need personal assurance, comfort, direction and sincerity.  Your desire to meet these innate needs drives your actions and decision making.  As a result, you tend to be more focused on team harmony and steadiness.  You believe that if you can foster a team climate of trust, dependability and security the team will thrive and get stuff done.  You value personal relationships without any drama.  You are often the person other people come to for advice because you are compassionate, considerate and a great listener.  You are the ‘steady eddy’ in the group – the person that can be relied upon.  As someone who communicates using the Accommodating communication style you are well suited to professions that require you to care about or for others.";
            }
            else if (yValue < 0 && xValue < 0){
                finalInfo = "If you demonstrate a dominance or proficiency toward Methodical communication you need to be right, accurate and you need time to be alone.  Your desire to meet those innate needs drives your actions and decision making.  As a result, you tend to be more focused on analysis, facts and details as they offer a way to demonstrate the validity of your approach.  You are more focused on tasks and goals because they are easier to measure in terms of whether they were done correctly or not.  People are harder to manage although you will often seek to create a climate where team rules are encouraged and followed so as to circumvent his innate unpredictability.  You pride yourself on your accuracy and objectivity – pointing to facts and data not opinion as evidence for a decision or action.  You are gifted problem solver because you are happy to deconstruct the problem and find out exactly what is going on so you can find the right and most effective solution.  Needless to say, you like order and prefer and organised and structured working environment with robust guidelines.  As someone who communicates using the Methodical communication style you are happiest when you know what you need to do and are free to pursue that object independently.  Ideally the task should have a ‘right way’ to achieve the outcome.";
            }
            else{
                finalInfo = "Unconclusive";
            }
            return finalInfo;
        }
        

        function setActiveQuestion(index){
            /*
             * setting active question on the results page
             */
            vm.activeQuestion = index;
        }

        function getAnswerClass(index){
            /*
             * returning the class to style the answer depending on whether it 
             * is right or wrong. quizMetrics can be referenced here without 
             * vm. as the object is passed by reference. We can manipulate 
             * the object directly here. vm. is only needed when it is being
             * manipulated by the view as the view does not have direct access
             * to the quizMetrics service. But as we are in the controller
             * we can directly manipulate it



             */
            if(index === quizMetrics.A[vm.activeQuestion]){
                return "bg-A";
            }if(index === quizMetrics.P[vm.activeQuestion]){
                return "bg-P";
            }if(index === quizMetrics.E[vm.activeQuestion]){
                return "bg-E";
            }if(index === quizMetrics.I[vm.activeQuestion]){
                return "bg-I";
            }else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
                return "bg-danger";
            }
        }

        function reset(){
            /*
             * reseting all the data. This includes reverting the results state
             * back to false which will return the view to the lists.
             *
             * Also all the variables on each question object is returned to 
             * the default state using the for loop to iterate through all 
             * questions.
             */
            quizMetrics.changeState("results", false);
            //quizMetrics.numCorrect = 0;
            quizMetrics.A = 0;
            quizMetrics.P = 0;
            quizMetrics.E = 0;
            quizMetrics.I = 0;


            for(var i = 0; i < DataService.quizQuestions.length; i++){
                var data = DataService.quizQuestions[i]; //binding the current question to data to keep code clean

                data.selected = null;
                data.correct = null;
            }
        }


        function getBarChart(){
        let myChart = document.getElementById('myChart').getContext('2d');

        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Helvetica Neue Light';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#11152D';

        let massPopChart = new Chart(myChart, {
        type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels:['Extrovert', 'Introvert', 'Assertive', 'Passive'],
            datasets:[{
            label:'Score',
            data:[
                quizMetrics.ACorrect,
                quizMetrics.PCorrect,
                quizMetrics.ECorrect,
                quizMetrics.ICorrect,
                0
            ],
            //backgroundColor:'green',
            backgroundColor:[
                '#E87406',
                '#8D4896',
                '#C1D112',
                '#857650',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth:1,
            borderColor:'#11152D',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
            }]
        },
        options:{
            title:{
            display:true,
            text:'Results of CSI',
            fontSize:25
            },
            legend:{
            display:false,
            position:'left',
            labels:{
                fontColor:'#11152D'
            }
            },
            layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
            },
            tooltips:{
            enabled:true
            }
        }
    });
    }

    function getPDF(index){
        var canvas = document.querySelector('#myChart');
        //creates image
        var canvasImg = canvas.toDataURL("image/png", 1.0);
        var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaYAAAGXCAYAAABIjoeJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDctMzBUMTU6MzU6MzYrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDctMzBUMTU6MzU6MzYrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA3LTMwVDE1OjM1OjM2KzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyYmNiZGYzLTY0NGMtNGYzOS05ZjQyLTkzZGVhYTAwZjFjOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjRiMjkwZmM0LTNiN2YtNDc0NS04MmFlLTk0MmZmNGJjZTBkMCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNjMDdiZWVmLTAzNDYtNDgzNS1hOWUzLTU3NTBlMDY2ZTVmZCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2MwN2JlZWYtMDM0Ni00ODM1LWE5ZTMtNTc1MGUwNjZlNWZkIiBzdEV2dDp3aGVuPSIyMDE4LTA3LTMwVDE1OjM1OjM2KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjJiY2JkZjMtNjQ0Yy00ZjM5LTlmNDItOTNkZWFhMDBmMWM4IiBzdEV2dDp3aGVuPSIyMDE4LTA3LTMwVDE1OjM1OjM2KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/5eoaAAB7NklEQVR4nO3dZ5gsVbm38XuTJMNSlogIgigouhAVMSsYERFBMaNyVIyogHoMR4/pNRyPCuasGDAHTJgVM2akUMyioKKFFDnLfj9U7cNmmOmqnumu1eH+Xddc4u7qWs9Md1d3/2vVs1atXr0aSZIkSZIkSZL6sk7uAiRJkiRJkiRJ88VgWpIkSZIkSZLUK4NpSZIkSZIkSVKvDKYlSZIkSZIkSb0ymJYkSZIkSZIk9cpgWpIkSZIkSZLUK4NpSZIkSZIk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'
        var A = quizMetrics.ACorrect.toString();
        var P = quizMetrics.PCorrect.toString();
        var E = quizMetrics.ECorrect.toString();
        var I = quizMetrics.ICorrect.toString();
        var FS = finalResult.toString();
        var FI = finalInfo.toString();
        var doc = new jsPDF()
        doc.rect(4, 4, doc.internal.pageSize.width - 8, doc.internal.pageSize.height - 8, 'S');
        //creates border
        doc.setFont('helvetica')
        doc.setFontSize(16)
        doc.setFontType('italic')
        doc.text('Interact Communication Style Invetory', 20, 60)
        doc.addImage(canvasImg, 'PNG', 10, 160, 190, 120);
        doc.addImage(imgData, 'PNG', 10, 10, 190, 50);
        doc.setFontSize(24)
        doc.setFontType('bold')
        doc.text('Your Communication Type is:  ' + FS, 20, 70);
        doc.setFontSize(16) 
        doc.setFontType('normal')
        doc.text('Your Extrovert Score is: ' + A, 20, 80);
        doc.text('Your Introvert Score is: ' + P, 20, 90);
        doc.text('Your Assertive Score is: ' + E, 20, 100);
        doc.text('Your Passive Score is: ' + I, 20, 110);
        doc.setFontSize(10)
        var splitTitle = doc.splitTextToSize(FI, 180);
        doc.text(splitTitle, 20, 120); 
        doc.save('Interact_CI_Results.pdf')
    }





    }

})();






