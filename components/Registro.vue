<template>
  <div>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="Nombres"
            :counter="10"
            :rules="nameRules"
            label="Nombres"
            class= "textcenter"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="Apellidos"
            :counter="10"
            :rules="nameRules"
            label="Apellidos"
            class= "textcenter"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="Correo"
            :rules="emailRules"
            label="Correo"
            class= "textcenter"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Botones -->
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn color="primary" @click="submit">Enviar</v-btn>
          <v-btn color="secondary" @click="resetForm">Resetear</v-btn>
          
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    Nombres: '',
    Apellidos: '',
    Correo: '',
    nameRules: [
      value => !!value || 'El nombre es obligatorio.',
      value => value.length <= 10 || 'El nombre debe tener menos de 10 caracteres.',
    ],
    emailRules: [
      value => !!value || 'El correo es obligatorio.',
      value => /.+@.+\..+/.test(value) || 'El correo debe ser válido.',
    ],
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        alert('Formulario válido y enviado');
        // Lógica de envío de datos
      } else {
        alert('Por favor, completa el formulario correctamente.');
      }
    },
    resetForm() {
      this.$refs.form.reset(); // Reinicia el formulario
    },
  },
};
</script>

