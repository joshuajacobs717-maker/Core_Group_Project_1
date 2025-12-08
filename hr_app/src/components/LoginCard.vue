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
    background-color: aqua;
    border-radius: 5px;
    width: 500px;
    height: 500px;
    text-align: center;
    padding: 10px;
}
#card{
    background-color: white;
}
input{
    border: none;
    border-radius: 5px;
    color: aqua;
    background-color: white;
}
</style>
