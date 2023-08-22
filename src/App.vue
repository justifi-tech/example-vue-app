<script setup lang="ts">
import { ref } from 'vue'

// Define the available components with their respective props
const components = [
  {
    name: 'Bank Account Form',
    tag: 'justifi-bank-account-form',
    props: {
      iframeOrigin: 'https://js.justifi.ai/v2',
      submitButtonText: 'Submit form'
    }
  },
  {
    name: 'Billing Form',
    tag: 'justifi-billing-form'
  },
  {
    name: 'Business Form',
    tag: 'justifi-business-form'
  },
  {
    name: 'Card Form',
    tag: 'justifi-card-form'
  },
  {
    name: 'Payment Form',
    tag: 'justifi-payment-form',
    props: {
      bankAccount: true,
      iframeOrigin: 'https://js.justifi.ai/v2',
      submitButtonText: 'Submit form'
    }
  }

  // Add other components with different props here...
]

// Define a reference to track the active component, including tag and props
const activeComponent = ref(components[0])
</script>

<template>
  <header>
    <nav>
      <ul>
        <!-- Render the links and handle clicks to change the active component -->
        <li v-for="item in components" :key="item.tag">
          <a href="#" @click.prevent="activeComponent = item">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Dynamically render the active component using the tag name and props -->
    <component :is="activeComponent.tag" v-bind="activeComponent.props"></component>
  </main>
</template>

<style>
:root {
  /* layout */
  --jfi-layout-font-family: 'Helvetica Neue', sans-serif;
  --jfi-layout-padding: 4px;
  --jfi-layout-form-control-spacing-x: 0.5rem;
  --jfi-layout-form-control-spacing-y: 1rem;

  /* colors */
  --jfi-primary-color: #007bff;

  /* form control */
  --jfi-form-control-background-color: #fff;
  --jfi-form-control-border-color: #ced4da;
  --jfi-form-control-border-color-focus: #80bdff;
  --jfi-form-control-border-color-error: #dc3545;
  --jfi-form-control-border-width: 1px;
  --jfi-form-control-border-bottom-width: 1px;
  --jfi-form-control-border-left-width: 1px;
  --jfi-form-control-border-right-width: 1px;
  --jfi-form-control-border-top-width: 1px;
  --jfi-form-control-border-radius: 0.25rem;
  --jfi-form-control-border-style: solid;
  --jfi-form-control-box-shadow: none;
  --jfi-form-control-box-shadow-error: none;
  --jfi-form-control-box-shadow-error-focus: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  --jfi-form-control-box-shadow-focus: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  --jfi-form-control-color: #495057;
  --jfi-form-control-color-focus: #495057;
  --jfi-form-control-font-size: 1rem;
  --jfi-form-control-font-weight: 400;
  --jfi-form-control-line-height: 1.5;
  --jfi-form-control-margin: 0;
  --jfi-form-control-padding: 0.375rem 0.75rem;

  /* form label */
  --jfi-form-label-color: #212529;
  --jfi-form-label-font-family: 'Helvetica Neue', sans-serif;
  --jfi-form-label-font-size: 1rem;
  --jfi-form-label-font-weight: 400;
  --jfi-form-label-margin: 0 0 0.5rem 0;

  /* validation messages */
  --jfi-error-message-color: #dc3545;
  --jfi-error-message-margin: 0.25rem 0 0 0;
  --jfi-error-message-font-size: 80%;

  /* submit button */
  --jfi-submit-button-color: white;
  --jfi-submit-button-background-color: #007bff;
  --jfi-submit-button-border-color: #007bff;
  --jfi-submit-button-padding: 0.375rem 0.75rem;
  --jfi-submit-button-font-size: 1rem;
  --jfi-submit-button-border-radius: 0.25rem;
  --jfi-submit-button-color-hover: white;
  --jfi-submit-button-background-color-hover: #0056b3;
  --jfi-submit-button-border-color-hover: #0056b3;
  --jfi-submit-button-color-focus: white;
  --jfi-submit-button-background-color-focus: #007bff;
  --jfi-submit-button-border-color-focus: #007bff;
  --jfi-submit-button-color-active: white;
  --jfi-submit-button-background-color-active: #007bff;
  --jfi-submit-button-border-color-active: #007bff;
  --jfi-submit-button-width: auto;
  --jfi-submit-button-box-shadow: none;
  --jfi-submit-button-color-loading: white;
  --jfi-submit-button-background-color-loading: #007bff;
  --jfi-submit-button-border-color-loading: #007bff;
}

header {
  line-height: 1.5;
}
</style>
