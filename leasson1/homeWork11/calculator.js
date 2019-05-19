const calculator = {
    value:0,
    getValue: function(a){
        if (!a||typeof(a) !=="number"){
            console.log("error")
        }
        else{
            this.value = a;
            return this
        }
    },
    plus: function(a){
        if (!a||typeof(a) !=="number"){
            console.log("error")
        }
        else{
        this.value +=a
        return this}
    },
    minus: function(a){
        if (!a||typeof(a) !=="number"){
            console.log("error")
        }
        else{
        this.value -=a
        return this}
    },
    mul: function(a){
        if (!a||typeof(a) !=="number"){
        console.log("error")
    }
    else{
        this.value *=a
        return this}
    },
    division: function(a){
        if (!a||typeof(a) !=="number"){
        console.log("error")
    }
    else{
        this.value /=a
        return this}
    },
    exponentiation: function(a){
        if (!a||typeof(a) !=="number"){
            console.log("error")
        }
        else{
        let result = 1
        for(let i = 0;i<a;i++){
            result = this.value*result
        }
        this.value = result
        return this}
    },
    decision: function(){
        console.log(Math.round(this.value*100)/100)
    },
}

calculator.getValue(15.25).plus(1).minus(5).mul(2).division(3).exponentiation(2).decision()