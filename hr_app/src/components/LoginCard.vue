 <script setup>

</script>

<template>
    <div id="card_container">
        <div id="card">
        <form>
            <label for="name">Employee Name :</label><br>
            <input type="text" id="name" name="name" placeholder="Eg. Mark Rusk"><br>
            <label for="password">Last name:</label><br>
            <input type="text" id="password" name="password" placeholder="Eg. 123Abc"><br><br>
            <input type="submit" value="Submit">
        </form>
        </div>
    </div>
</template>

<style scoped>
#card_container{
    border: none;
    background-color: #8BAE66;
    border-radius: 5px;
    width: 500px;
    height: 500px;
    text-align: center;
    padding: 2px;
    
   
}
#card{
    background-color: #efefef;
    padding: 5px;
    margin-top: 70px;
    margin-left: 30px;
    margin-right: 30px;
    height: 350px;

    
}
input{
    border: none;
    border-radius: 5px;
    color: #628141;
    background-color: #EBD5AB;
    padding: 5px;

}
</style>
