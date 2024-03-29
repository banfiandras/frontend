<template>
  <div class="admin-page">
    <h1>User Management</h1>
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Win Counter</th>
          <th>Dont like the user?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.wincounter }}</td>
          <td>
            <button @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';

const users = ref([]);

const fetchUserData = async () => {
  try {
    const response = await getData();
    users.value = response.data.map(user => ({
      id: user.ID,
      username: user.Name,
      wincounter: user.WinCounter
    }));
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

onMounted(() => {
  fetchUserData();
});

const getData = () => {
  return axios.get('http://localhost:8000/api/returnData');
};

const deleteUser = async (userId) => {
  try {
    await axios.delete(`http://localhost:8000/api/deleteUser/${userId}`);
    users.value = users.value.filter(user => user.id !== userId);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
</script>

<style>
.admin-page {
  text-align: center;
}

.user-table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

.user-table th,
.user-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.user-table th {
  background-color: #f2f2f2;
}

.user-table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
