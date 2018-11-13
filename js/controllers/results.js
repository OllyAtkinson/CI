/*
 * IIFE to encapsulate code and avoid global variables
 */
(function(){

    /*
     * attaching results controller function to the turtleFacts module 
     */
    angular
        .module("turtleFacts")
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
        var doc = new jsPDF()
        var variable = 'test';
        doc.text(30, 30,  `Time: ${this.hour} : ${this.minutes}`);
        doc.text(20, 20, variable);
        doc.text('Hello world!', 10, 10)
        doc.save('Interact_CI_Results.pdf')
    }





    }

})();






