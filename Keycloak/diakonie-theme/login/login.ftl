<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
    <#if section = "header">
        ${msg("emailVerifyInstruction1")}
    <#elseif section = "form">
    <div id="kc-form" <#if realm.password && social.providers??>class="${properties.kcContentWrapperClass!}"</#if>>
      <div id="kc-form-wrapper" <#if realm.password && social.providers??>class="${properties.kcFormSocialAccountContentClass!} ${properties.kcFormSocialAccountClass!}"</#if>>
        <#if realm.password>
            <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
                <div id="kc-form-options" class="${properties.kcFormOptionsClass!} kc-form-optionsClass">
                    <a class="textlink" href="/login">${kcSanitize(msg("backToLogin"))?no_esc}</a>
                </div>
            </form>
        </#if>
        </div>
      </div>
    </#if>
</@layout.registrationLayout>
