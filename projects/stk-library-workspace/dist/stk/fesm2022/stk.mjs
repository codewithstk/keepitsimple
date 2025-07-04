import * as i2 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, Inject, ChangeDetectionStrategy, Component, Input, Directive, ContentChild, ContentChildren, NgModule, EventEmitter, HostListener, Output } from '@angular/core';
import * as i1 from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { merge, of, map } from 'rxjs';
import { trigger, state, transition, style, animate } from '@angular/animations';

var ThemeKeys;
(function (ThemeKeys) {
    ThemeKeys["CeramicArtMontaj"] = "ceramicartmontaj";
})(ThemeKeys || (ThemeKeys = {}));

const base = {
    //SPACERS
    'spacer-xs': '4px',
    'spacer-sm': '8px',
    'spacer-md': '16px',
    'spacer-lg': '24px',
    'spacer-xl': '32px',
    'spacer-xxl': '40px',
    //FONT SIZE
    'font-size-h1': '3rem',
    'font-size-h2': '2rem',
    'font-size-h3': '1.5rem',
    'font-size-h4': '1rem',
    'font-size-h5': '0.875rem',
    'font-size-body': '1rem',
    'font-size-small': '0.875rem',
    //BORDER RADIUS
    'radius-0': '0',
    'radius-xs': '6px',
    'radius-sm': '8px',
    'radius-md': '12px',
    'radius-lg': '16px',
    'radius-xl': '18px',
    'radius-xxl': '24px',
    'radius-full': '50%',
    'zindex-over-default': '100',
    'zindex-component': '500',
    'zindex-component-element': '501',
    'zindex-always-on-top': '999'
};

const genericColors = {
    'color-primary': 'rgba(255, 255, 255, 1)',
    'color-secondary': 'rgba(0, 0, 0, 1)',
    'color-brand': 'rgba(247, 183, 11, 1)',
    'color-neutral': 'rgba(237, 237, 237, 1)',
    'color-neutral-fill': 'rgba(217, 217, 217, 1)',
    'color-neutral-muted': 'rgba(24, 24, 27, 0.03)',
    'color-neutral-contrast': 'rgba(108, 109, 122, 1)'
};
const colors = {
    ...genericColors,
    //Specific Colors
    'text-primary': genericColors['color-secondary'],
    'text-secondary': genericColors['color-neutral-contrast']
};

function validateVariables(theme) {
    for (const key in theme) {
        if (theme.hasOwnProperty(key)) {
            const value = theme[key];
            const variables = value
                .split('var(--')
                .slice(1)
                .map(v => v.split(')')[0]);
            for (const variable of variables) {
                if (!theme.hasOwnProperty(variable)) {
                    throw new Error(`Invalid variable "${variable}" in property "${key}".`);
                }
            }
        }
    }
}

const ceramicartmontaj = {
    ...base,
    ...colors
};
validateVariables(ceramicartmontaj);
const THEMES = {
    [ThemeKeys.CeramicArtMontaj]: ceramicartmontaj
};

class StkThemeService {
    document;
    _selectedThemeKey;
    constructor(document) {
        this.document = document;
    }
    get selectedThemeKey() {
        return this._selectedThemeKey;
    }
    setTheme(name) {
        if (!name) {
            name = ThemeKeys.CeramicArtMontaj;
        }
        const theme = THEMES[name];
        this._selectedThemeKey = name;
        Object.keys(theme).forEach(key => {
            const themeProperty = theme[key];
            this.document.documentElement.style.setProperty(`--${key}`, themeProperty);
        });
    }
    static ɵfac = function StkThemeService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkThemeService)(i0.ɵɵinject(DOCUMENT)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StkThemeService, factory: StkThemeService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkThemeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], null); })();

const SVG_ICONS = {
    expand_more: `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
  `,
    arrow_circle_up: `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
  `,
    arrow_circle_right: `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
  `,
    arrow_circle_left: `
 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
  `,
    close: `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
  `,
    menu: `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
  `,
    location_on: `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
  `,
    call: `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
  `,
    ceramicartmontaj: `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<path d="M25.79 10.43l3.512-1.951-13.136-7.803-13.461 7.803v15.281l13.461 8.063c4.227-2.644 12.771-7.959 13.136-8.063s-2.189-1.387-3.511-2.016l-9.624 5.722-9.949-5.722v-11.315l9.949-5.853 9.624 5.853z"></path>
<path d="M16.18 10.018l-2.526 1.828c0.842 0.566 2.526 1.711 2.526 1.763s1.641-1.154 2.462-1.763l-2.462-1.828z"></path>
<path d="M16.117 18.853l-2.548 1.828c0.849 0.566 2.548 1.711 2.548 1.763s1.655-1.154 2.483-1.763l-2.483-1.828z"></path>
<path d="M13.010 12.217l-2.526 1.828c0.842 0.566 2.526 1.711 2.526 1.763s1.641-1.154 2.462-1.763l-2.462-1.828z"></path>
<path d="M13.010 16.655l-2.526 1.807c0.842 0.559 2.526 1.691 2.526 1.742s1.641-1.14 2.462-1.742l-2.462-1.807z"></path>
<path d="M10.009 14.457l-2.526 1.807c0.842 0.559 2.526 1.691 2.526 1.742s1.641-1.14 2.462-1.742l-2.462-1.807z"></path>
<path d="M19.245 12.217l-2.548 1.828c0.849 0.566 2.548 1.711 2.548 1.763s1.655-1.154 2.482-1.763l-2.483-1.828z"></path>
<path d="M19.245 16.655l-2.548 1.807c0.849 0.559 2.548 1.691 2.548 1.742s1.655-1.14 2.482-1.742l-2.483-1.807z"></path>
<path d="M22.098 14.457l-2.526 1.807c0.842 0.559 2.526 1.691 2.526 1.742s1.641-1.14 2.462-1.742l-2.462-1.807z"></path>
<path d="M16.117 14.457l-2.548 1.807c0.849 0.559 2.548 1.691 2.548 1.742s1.655-1.14 2.483-1.742l-2.483-1.807z"></path>
</svg>
  `,
    whatsapp: `
  <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.8 -30.8 369.60 369.60" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#000000" stroke-width="0.0030800000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.232"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
  `
};

function StkIconComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r0.iconSvg, i0.ɵɵsanitizeHtml);
} }
class StkIconComponent {
    sanitizer;
    name;
    iconSvg = '';
    svgIcon = null;
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnChanges(changes) {
        const name = changes['name']?.currentValue;
        if (name) {
            const rawSvg = SVG_ICONS[name];
            if (rawSvg) {
                this.iconSvg = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
            }
        }
    }
    static ɵfac = function StkIconComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkIconComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StkIconComponent, selectors: [["stk-icon"]], inputs: { name: "name" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function StkIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StkIconComponent_Conditional_0_Template, 1, 1, "span", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.iconSvg ? 0 : -1);
        } }, styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;line-height:0}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{width:1em;height:1em;fill:currentcolor}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkIconComponent, [{
        type: Component,
        args: [{ selector: 'stk-icon', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (iconSvg) {\r\n<span [innerHTML]=\"iconSvg\"> </span>\r\n}\r\n", styles: [":host{display:block}:host span{display:inline-block;vertical-align:middle;line-height:0}:host svg{width:1em;height:1em;fill:currentcolor}\n"] }]
    }], () => [{ type: i1.DomSanitizer }], { name: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StkIconComponent, { className: "StkIconComponent", filePath: "lib/components/icon/icon.component.ts", lineNumber: 18 }); })();

class StkBtnScrollToTopComponent {
    rootContentElement;
    scrollToTop() {
        const scrollableContent = this.rootContentElement ?? window;
        scrollableContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
    static ɵfac = function StkBtnScrollToTopComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkBtnScrollToTopComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StkBtnScrollToTopComponent, selectors: [["stk-btn-scroll-to-top"]], inputs: { rootContentElement: "rootContentElement" }, decls: 2, vars: 0, consts: [[1, "btn", "btn-scroll-to-top", 3, "click"], ["name", "arrow_circle_up", 1, "icon", "icon-lg"]], template: function StkBtnScrollToTopComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function StkBtnScrollToTopComponent_Template_button_click_0_listener() { return ctx.scrollToTop(); });
            i0.ɵɵelement(1, "stk-icon", 1);
            i0.ɵɵelementEnd();
        } }, dependencies: [StkIconComponent], styles: [".btn-scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:20px;cursor:pointer;border-radius:var(--radius-full);background-color:#ffffffb3;fill:var(--color-neutral-contrast);transition:.3s ease-in-out;z-index:var(--zindex-over-default);box-shadow:var(--box-shadow-color)}.btn-scroll-to-top[_ngcontent-%COMP%]:hover{background-color:var(--color-brand);fill:#fff;transition:.3s ease-in-out}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkBtnScrollToTopComponent, [{
        type: Component,
        args: [{ selector: 'stk-btn-scroll-to-top', imports: [StkIconComponent], standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<button (click)=\"scrollToTop()\"\r\n        class=\"btn btn-scroll-to-top\">\r\n\r\n  <stk-icon class=\"icon icon-lg\"\r\n            name=\"arrow_circle_up\"></stk-icon>\r\n</button>\r\n", styles: [".btn-scroll-to-top{position:fixed;bottom:30px;right:20px;cursor:pointer;border-radius:var(--radius-full);background-color:#ffffffb3;fill:var(--color-neutral-contrast);transition:.3s ease-in-out;z-index:var(--zindex-over-default);box-shadow:var(--box-shadow-color)}.btn-scroll-to-top:hover{background-color:var(--color-brand);fill:#fff;transition:.3s ease-in-out}\n"] }]
    }], null, { rootContentElement: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StkBtnScrollToTopComponent, { className: "StkBtnScrollToTopComponent", filePath: "lib/components/btn-scroll-to-top/btn-scroll-to-top.component.ts", lineNumber: 12 }); })();

class TextDecryptedComponent {
    cdr;
    text = '';
    displayText = '';
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    intervalId;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        this.startFuzzyEffect();
    }
    startFuzzyEffect() {
        const finalText = this.text.split('');
        let currentIndex = 0;
        this.intervalId = setInterval(() => {
            this.displayText = finalText
                .map((char, i) => {
                if (i < currentIndex) {
                    return char;
                }
                return this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            })
                .join('');
            currentIndex++;
            this.cdr.detectChanges();
            if (currentIndex > finalText.length) {
                clearInterval(this.intervalId);
            }
        }, 50);
    }
    static ɵfac = function TextDecryptedComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TextDecryptedComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextDecryptedComponent, selectors: [["stk-text-decrypted"]], inputs: { text: "text" }, decls: 2, vars: 1, consts: [[1, "fuzzy-text"]], template: function TextDecryptedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.displayText);
        } }, styles: [".fuzzy-text[_ngcontent-%COMP%]{font-family:monospace;white-space:pre;display:inline-block;letter-spacing:.05em}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextDecryptedComponent, [{
        type: Component,
        args: [{ selector: 'stk-text-decrypted', imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"fuzzy-text\">{{ displayText }}</span>\r\n", styles: [".fuzzy-text{font-family:monospace;white-space:pre;display:inline-block;letter-spacing:.05em}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { text: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TextDecryptedComponent, { className: "TextDecryptedComponent", filePath: "lib/components/text/text-decrypted/text-decrypted.component.ts", lineNumber: 16 }); })();

class StkAccordionContentDirective {
    templateRef;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ɵfac = function StkAccordionContentDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkAccordionContentDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StkAccordionContentDirective, selectors: [["", "stkAccordionContent", ""]], standalone: false });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkAccordionContentDirective, [{
        type: Directive,
        args: [{
                selector: '[stkAccordionContent]',
                standalone: false
            }]
    }], () => [{ type: i0.TemplateRef }], null); })();

class StkAccordionHeaderDirective {
    templateRef;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ɵfac = function StkAccordionHeaderDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkAccordionHeaderDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StkAccordionHeaderDirective, selectors: [["", "stkAccordionHeader", ""]], standalone: false });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkAccordionHeaderDirective, [{
        type: Directive,
        args: [{
                selector: '[stkAccordionHeader]',
                standalone: false
            }]
    }], () => [{ type: i0.TemplateRef }], null); })();

class StkAccordionTitleDirective {
    templateRef;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ɵfac = function StkAccordionTitleDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkAccordionTitleDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StkAccordionTitleDirective, selectors: [["", "stkAccordionTitle", ""]], standalone: false });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkAccordionTitleDirective, [{
        type: Directive,
        args: [{
                selector: '[stkAccordionTitle]',
                standalone: false
            }]
    }], () => [{ type: i0.TemplateRef }], null); })();

class StkAccordionItemComponent {
    title = '';
    disabled = false;
    isExpanded = false;
    content;
    customTitle;
    customHeader;
    static ɵfac = function StkAccordionItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkAccordionItemComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StkAccordionItemComponent, selectors: [["stk-accordion-item"]], contentQueries: function StkAccordionItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, StkAccordionContentDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, StkAccordionTitleDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, StkAccordionHeaderDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customTitle = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customHeader = _t.first);
        } }, inputs: { title: "title", disabled: "disabled", isExpanded: "isExpanded" }, standalone: false, decls: 0, vars: 0, template: function StkAccordionItemComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkAccordionItemComponent, [{
        type: Component,
        args: [{ selector: 'stk-accordion-item', template: '', standalone: false }]
    }], null, { title: [{
            type: Input
        }], disabled: [{
            type: Input
        }], isExpanded: [{
            type: Input
        }], content: [{
            type: ContentChild,
            args: [StkAccordionContentDirective]
        }], customTitle: [{
            type: ContentChild,
            args: [StkAccordionTitleDirective]
        }], customHeader: [{
            type: ContentChild,
            args: [StkAccordionHeaderDirective]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StkAccordionItemComponent, { className: "StkAccordionItemComponent", filePath: "lib/components/accordion/accordion-item.component.ts", lineNumber: 12 }); })();

const toggleTransition = trigger('contentExpansion', [
    state('expanded', style({ height: '*', opacity: 1, visibility: 'visible' })),
    state('collapsed', style({ height: '0px', opacity: 0, visibility: 'hidden' })),
    transition('expanded <=> collapsed', animate('200ms cubic-bezier(.37,1.04,.68,.98)'))
]);

const _c0 = (a0, a1) => ({ $implicit: a0, index: a1 });
function AccordionComponent_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AccordionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵlistener("click", function AccordionComponent_div_1_Template_div_click_1_listener() { const ctx_r1 = i0.ɵɵrestoreView(_r1); const item_r3 = ctx_r1.$implicit; const i_r4 = ctx_r1.index; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.toggleState(item_r3, i_r4)); });
    i0.ɵɵelementContainer(2, 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵtemplate(4, AccordionComponent_div_1_ng_container_4_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    const defaultHeader_r6 = i0.ɵɵreference(3);
    i0.ɵɵclassProp("disabled", item_r3.disabled)("active", ctx_r4.expandedRows.has(i_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", (item_r3 == null ? null : item_r3.customHeader == null ? null : item_r3.customHeader.templateRef) || defaultHeader_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction2(10, _c0, item_r3, i_r4));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("expanded", ctx_r4.expandedRows.has(i_r4));
    i0.ɵɵproperty("@contentExpansion", ctx_r4.expandedRows.has(i_r4) ? "expanded" : "collapsed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", item_r3.content.templateRef);
} }
function AccordionComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AccordionComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7 == null ? null : item_r7.title);
} }
function AccordionComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header", 9);
    i0.ɵɵtemplate(1, AccordionComponent_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementStart(2, "button", 10);
    i0.ɵɵelement(3, "stk-icon", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AccordionComponent_ng_template_2_ng_template_4_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const defaultTitle_r8 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", (item_r7 == null ? null : item_r7.customTitle == null ? null : item_r7.customTitle.templateRef) || defaultTitle_r8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", item_r7.disabled);
} }
class AccordionComponent {
    cdr;
    canMultiple = false;
    items;
    expandedRows = new Set();
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        merge(this.items.changes, of(this.items))
            .pipe(map(() => this.items.toArray()))
            .subscribe(items => {
            items.forEach((item, index) => {
                if (item.isExpanded) {
                    this.expandedRows.add(index);
                }
            });
            this.cdr.detectChanges();
        });
    }
    toggleState(item, index) {
        if (item.disabled) {
            return;
        }
        if (this.expandedRows.has(index)) {
            this.expandedRows.delete(index);
        }
        else {
            if (!this.canMultiple) {
                this.expandedRows.clear();
            }
            this.expandedRows.add(index);
        }
    }
    static ɵfac = function AccordionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccordionComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["stk-accordion"]], contentQueries: function AccordionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, StkAccordionItemComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
        } }, inputs: { canMultiple: "canMultiple" }, standalone: false, decls: 4, vars: 1, consts: [["defaultHeader", ""], ["defaultTitle", ""], [1, "accordion"], ["class", "accordion__item", 3, "disabled", "active", 4, "ngFor", "ngForOf"], [1, "accordion__item"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "accordion__content"], [4, "ngTemplateOutlet"], [1, "accordion__header"], [1, "accordion__toggle-btn", 3, "disabled"], ["name", "expand_more", 1, "icon", "icon-xs", "u-pointer"], [1, "accordion__title"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 2);
            i0.ɵɵtemplate(1, AccordionComponent_div_1_Template, 5, 13, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, AccordionComponent_ng_template_2_Template, 6, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, dependencies: [StkIconComponent, i2.NgForOf, i2.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block;width:100%}.accordion__item.disabled[_ngcontent-%COMP%]   .accordion__header[_ngcontent-%COMP%]{color:var(--color-neutral-fill);border-bottom:1px solid var(--color-neutral);cursor:not-allowed}.accordion__item.active[_ngcontent-%COMP%]   .accordion__header[_ngcontent-%COMP%]{color:var(--color-brand);border-bottom:1px solid var(--color-brand)}.accordion__item.active[_ngcontent-%COMP%]   .accordion__toggle-btn[_ngcontent-%COMP%]{transform:rotate(180deg)}.accordion__item.active[_ngcontent-%COMP%]   .accordion__toggle-btn[_ngcontent-%COMP%]   stk-icon[_ngcontent-%COMP%]{fill:var(--color-brand)}.accordion__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:2px solid transparent;min-height:50px;cursor:pointer;background:var(--color-primary);border-bottom:1px solid var(--color-neutral);padding:var(--spacer-sm)}.accordion__header[_ngcontent-%COMP%]:hover{border-bottom:1px solid var(--color-brand);transition:.2s ease-in}.accordion__title[_ngcontent-%COMP%]{font-weight:500}.accordion__toggle-btn[_ngcontent-%COMP%]{border:none;transition:transform .2s ease-in;background:none}.accordion__toggle-btn[_ngcontent-%COMP%]:focus{outline:none}.accordion__toggle-btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.accordion__toggle-btn[_ngcontent-%COMP%]:disabled   stk-icon[_ngcontent-%COMP%]{fill:var(--color-neutral-fill)}.accordion__content[_ngcontent-%COMP%]{color:var(--color-neutral-contrast);text-align:justify}"], data: { animation: [toggleTransition] }, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionComponent, [{
        type: Component,
        args: [{ selector: 'stk-accordion', changeDetection: ChangeDetectionStrategy.OnPush, animations: [toggleTransition], standalone: false, template: "<section class=\"accordion\">\r\n  <div *ngFor=\"let item of items; index as i\"\r\n       class=\"accordion__item\"\r\n       [class.disabled]=\"item.disabled\"\r\n       [class.active]=\"expandedRows.has(i)\">\r\n    <div (click)=\"toggleState(item, i)\">\r\n      <ng-container [ngTemplateOutlet]=\"(item?.customHeader?.templateRef || defaultHeader)\"\r\n                    [ngTemplateOutletContext]=\"{$implicit: item, index: i}\"></ng-container>\r\n    </div>\r\n\r\n    <div class=\"accordion__content\"\r\n         [class.expanded]=\"expandedRows.has(i)\"\r\n         [@contentExpansion]=\"expandedRows.has(i) ? 'expanded':'collapsed'\">\r\n      <ng-container *ngTemplateOutlet=\"item.content.templateRef\"></ng-container>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<ng-template #defaultHeader\r\n             let-item\r\n             let-index=\"index\">\r\n  <header class=\"accordion__header\">\r\n    <ng-container *ngTemplateOutlet=\"item?.customTitle?.templateRef || defaultTitle\"></ng-container>\r\n    <button class=\"accordion__toggle-btn\"\r\n            [disabled]=\"item.disabled\">\r\n      <stk-icon class=\"icon icon-xs u-pointer\"\r\n                name=\"expand_more\"></stk-icon>\r\n    </button>\r\n  </header>\r\n\r\n  <ng-template #defaultTitle>\r\n    <p class=\"accordion__title\">{{item?.title}}</p>\r\n  </ng-template>\r\n</ng-template>\r\n", styles: [":host{display:block;width:100%}.accordion__item.disabled .accordion__header{color:var(--color-neutral-fill);border-bottom:1px solid var(--color-neutral);cursor:not-allowed}.accordion__item.active .accordion__header{color:var(--color-brand);border-bottom:1px solid var(--color-brand)}.accordion__item.active .accordion__toggle-btn{transform:rotate(180deg)}.accordion__item.active .accordion__toggle-btn stk-icon{fill:var(--color-brand)}.accordion__header{display:flex;justify-content:space-between;align-items:center;border:2px solid transparent;min-height:50px;cursor:pointer;background:var(--color-primary);border-bottom:1px solid var(--color-neutral);padding:var(--spacer-sm)}.accordion__header:hover{border-bottom:1px solid var(--color-brand);transition:.2s ease-in}.accordion__title{font-weight:500}.accordion__toggle-btn{border:none;transition:transform .2s ease-in;background:none}.accordion__toggle-btn:focus{outline:none}.accordion__toggle-btn:disabled{cursor:not-allowed}.accordion__toggle-btn:disabled stk-icon{fill:var(--color-neutral-fill)}.accordion__content{color:var(--color-neutral-contrast);text-align:justify}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { canMultiple: [{
            type: Input
        }], items: [{
            type: ContentChildren,
            args: [StkAccordionItemComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionComponent, { className: "AccordionComponent", filePath: "lib/components/accordion/accordion.component.ts", lineNumber: 22 }); })();

const components = [
    AccordionComponent,
    StkAccordionItemComponent,
    StkAccordionContentDirective,
    StkAccordionTitleDirective,
    StkAccordionHeaderDirective
];
class StkAccordionModule {
    static ɵfac = function StkAccordionModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkAccordionModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StkAccordionModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, HammerModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkAccordionModule, [{
        type: NgModule,
        args: [{
                declarations: [...components],
                imports: [StkIconComponent, CommonModule, HammerModule],
                providers: [],
                exports: [...components]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StkAccordionModule, { declarations: [AccordionComponent,
        StkAccordionItemComponent,
        StkAccordionContentDirective,
        StkAccordionTitleDirective,
        StkAccordionHeaderDirective], imports: [StkIconComponent, CommonModule, HammerModule], exports: [AccordionComponent,
        StkAccordionItemComponent,
        StkAccordionContentDirective,
        StkAccordionTitleDirective,
        StkAccordionHeaderDirective] }); })();

//Can be used only on window scroll
class StkWindowSectionScrollSpyDirective {
    sectionChange = new EventEmitter();
    headerHeightOffset;
    currentSectionId;
    onScroll(_event) {
        const sections = document.querySelectorAll('section[id]');
        let activeSectionId = null;
        sections.forEach((section) => {
            if (this.isSectionVisible(section)) {
                activeSectionId = section.id;
            }
        });
        if (activeSectionId && activeSectionId !== this.currentSectionId) {
            this.currentSectionId = activeSectionId;
            this.sectionChange.emit(this.currentSectionId);
        }
    }
    isSectionVisible(section) {
        const sectionTop = section.offsetTop - this.headerHeightOffset - 1;
        const sectionBottom = sectionTop + section.offsetHeight;
        const currentPosition = window.scrollY;
        return currentPosition >= sectionTop && currentPosition < sectionBottom;
    }
    static ɵfac = function StkWindowSectionScrollSpyDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkWindowSectionScrollSpyDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StkWindowSectionScrollSpyDirective, selectors: [["", "stkWindowSectionScrollSpy", ""]], hostBindings: function StkWindowSectionScrollSpyDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function StkWindowSectionScrollSpyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { headerHeightOffset: "headerHeightOffset" }, outputs: { sectionChange: "sectionChange" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkWindowSectionScrollSpyDirective, [{
        type: Directive,
        args: [{
                selector: '[stkWindowSectionScrollSpy]',
                standalone: true
            }]
    }], null, { sectionChange: [{
            type: Output
        }], headerHeightOffset: [{
            type: Input
        }], onScroll: [{
            type: HostListener,
            args: ['window:scroll', ['$event']]
        }] }); })();

class StkClickOutsideDirective {
    elementRef;
    clickOutside = new EventEmitter();
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
    static ɵfac = function StkClickOutsideDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkClickOutsideDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StkClickOutsideDirective, selectors: [["", "stkClickOutside", ""]], hostBindings: function StkClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function StkClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, i0.ɵɵresolveDocument);
        } }, outputs: { clickOutside: "clickOutside" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[stkClickOutside]',
                standalone: true
            }]
    }], () => [{ type: i0.ElementRef }], { clickOutside: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();

class StkDOMtHelperService {
    document;
    rendererFactory;
    renderer;
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(document, null);
    }
    toggleDocumentScroll(isActive, overflowValue = 'auto') {
        if (isActive) {
            this.renderer.setStyle(this.document.body, 'overflow', overflowValue);
        }
        else {
            this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
        }
    }
    static ɵfac = function StkDOMtHelperService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StkDOMtHelperService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i0.RendererFactory2)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StkDOMtHelperService, factory: StkDOMtHelperService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StkDOMtHelperService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.RendererFactory2 }], null); })();

// NOTE: Do not import from this file within the library. Use relative imports inside the library source.
/*
 * Public API Surface of stk
 */
//*******THEME

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, SVG_ICONS, StkAccordionContentDirective, StkAccordionHeaderDirective, StkAccordionItemComponent, StkAccordionModule, StkAccordionTitleDirective, StkBtnScrollToTopComponent, StkClickOutsideDirective, StkDOMtHelperService, StkIconComponent, StkThemeService, StkWindowSectionScrollSpyDirective, TextDecryptedComponent, ThemeKeys };
//# sourceMappingURL=stk.mjs.map
