<!--
  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
        <div class="guest-box">
                <form action="" method="post" @submit="onSubmit">
                        <input type="hidden" name="requesttoken" :value="requesttoken">
                        <fieldset>
                                <NcNoteCard v-if="message !== ''" type="error">
                                        {{ message }}
                                </NcNoteCard>
                                <p v-else>
                                        {{ t('registration', 'Welcome, you can create your account below.') }}
                                </p>

                                <NcNoteCard v-if="additionalHint" type="success">
                                        {{ additionalHint }}
                                </NcNoteCard>

                                <NcTextField v-if="!emailIsOptional || email.length > 0"
                                        :value.sync="email"
                                        type="email"
                                        :label="t('registration', 'Email')"
                                        :label-visible="true"
                                        name="email"
                                        disabled>
                                        <Email :size="20" class="input__icon" />
                                </NcTextField>

                                <NcTextField v-if="!emailIsLogin"
                                        :value.sync="loginname"
                                        type="text"
                                        name="loginname"
                                        :label="t('registration', 'Login name')"
                                        :label-visible="true"
                                        required>
                                        <Key v-if="showFullname" :size="20" class="input__icon" />
                                        <Account v-else :size="20" class="input__icon" />
                                </NcTextField>
                                <input v-else
                                        type="hidden"
                                        name="loginname"
                                        :value="email">

                                <NcTextField v-if="showFullname"
                                        :value.sync="fullname"
                                        type="text"
                                        name="fullname"
                                        :label="t('registration', 'Full name')"
                                        :label-visible="true"
                                        :required="enforceFullname">
                                        <Account :size="20" class="input__icon" />
                                </NcTextField>
                                <input v-else
                                        type="hidden"
                                        name="fullname"
                                        value="">
                              
                                 <NcTextField v-if="showProfession"
                                        :value.sync="Industry"
                                        type="text"
                                        name="Industry"
                                        :label="t('registration', 'Industry')"
                                        :label-visible="true"
                                        :required="enforceProfession">
                                        <Account :size="20" class="input__icon" />
                                </NcTextField>
                                <input v-else
                                        type="hidden"
                                        name="Industry"
                                        value="">

                                <NcTextField v-if="showPhone"
                                        :value.sync="phone"
                                        type="text"
                                        name="phone"
                                        :label="t('registration', 'Phone number')"
                                        :label-visible="true"
                                        :required="enforcePhone">
                                        <Phone :size="20" class="input__icon" />
                                </NcTextField>
                                <input v-else
                                        type="hidden"
                                        name="phone"
                                        value="">

                                <NcPasswordField :value.sync="password"
                                        :label="t('registration', 'Password')"
                                        :label-visible="true"
                                        name="password"
                                        required>
                                        <Lock :size="20" class="input__icon" />
                                </NcPasswordField>
                                   
                                 <input type="hidden" name="plan" :value="plan">
                                 <input type="hidden" name="period" :value="period">
                               
                                <NcButton id="submit"
                                        native-type="submit"
                                        type="primary"
                                        :wide="true"
                                        :disabled="submitting || password.length === 0">
                                        {{ submitting ? t('registration', 'Loading') : t('registration', 'Create account') }}
                                </NcButton>
                        </fieldset>
                </form>
        </div>
</template>

<script>
import { getRequestToken } from '@nextcloud/auth'
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import NcNoteCard from '@nextcloud/vue/dist/Components/NcNoteCard.js'
import NcTextField from '@nextcloud/vue/dist/Components/NcTextField.js'
import NcPasswordField from '@nextcloud/vue/dist/Components/NcPasswordField.js'
import { loadState } from '@nextcloud/initial-state'
import Email from 'vue-material-design-icons/Email.vue'
import Lock from 'vue-material-design-icons/Lock.vue'
import Phone from 'vue-material-design-icons/Phone.vue'
import Account from 'vue-material-design-icons/Account.vue'
import Key from 'vue-material-design-icons/Key.vue'

export default {
        name: 'User',

        components: {
                NcButton,
                NcNoteCard,
                NcTextField,
                NcPasswordField,
                Email,
                Lock,
                Phone,
                Account,
                Key,
        },

        data() {
                return {
                        email: loadState('registration', 'email'),
                        emailIsLogin: loadState('registration', 'emailIsLogin'),
                        emailIsOptional: loadState('registration', 'emailIsOptional'),
                        loginname: loadState('registration', 'loginname'),
                        fullname: loadState('registration', 'fullname'),
                        showFullname: loadState('registration', 'showFullname'),
                        enforceFullname: loadState('registration', 'enforceFullname'),
                        Industry: loadState('registration', 'Industry'),
                        showProfession: loadState('registration', 'showProfession'),
                        enforceProfession: loadState('registration', 'enforceProfession'),

                        phone: loadState('registration', 'phone'),
                        showPhone: loadState('registration', 'showPhone'),
                        enforcePhone: loadState('registration', 'enforcePhone'),
                        message: loadState('registration', 'message'),
                        password: loadState('registration', 'password'),
                        plan: '',
                        period: '',
                        additionalHint: loadState('registration', 'additionalHint'),
                        requesttoken: getRequestToken(),
                        loginFormLink: loadState('registration', 'loginFormLink'),
                        isPasswordHidden: true,
                        passwordInputType: 'password',
                        submitting: false,
                }
        },

        mounted() {
  this.plan = localStorage.getItem('plan') || ''
  this.period = localStorage.getItem('period') || ''
}
,
       
        methods: {
                togglePassword() {
                        if (this.passwordInputType === 'password') {
                                this.passwordInputType = 'text'
                        } else {
                                this.passwordInputType = 'password'
                        }
                },
                onSubmit() {
                        // prevent sending the request twice
                        this.submitting = true
                },
        },
}
</script>

<style lang="scss" scoped>
.guest-box {
        text-align: left;
}

fieldset {
        display: flex;
        flex-direction: column;
        gap: .5rem;
}

.button-vue--vue-tertiary {
        box-sizing: border-box;
}
</style>
