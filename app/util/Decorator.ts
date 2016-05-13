import {Component, Directive} from '@angular/core';
import {CoreConfig, Platform} from '../core.config';
import {Url} from './url';

const _reflect: any = Reflect;

export class Decorator {
    public static getMetadata(metadata: any = {}, customDecoratorMetadata?: any) {
        if (metadata.templateUrl)
            metadata.templateUrl = Url.fixTemplateUrl(metadata.templateUrl);
        if (metadata.styleUrls)
            metadata.styleUrls = Url.fixStyleUrls(metadata.styleUrls);

        return metadata;
    }

    public static annotateComponent(cls: any, metadata: any, customDecoratorMetadata?: any) {
        return Decorator.annotate(Component, cls, metadata, customDecoratorMetadata);
    }

    public static annotateDirective(cls: any, metadata: any, customDecoratorMetadata?: any) {
        return Decorator.annotate(Directive, cls, metadata, customDecoratorMetadata);
    }

    private static annotate(CompConst: any, cls: any, metadata: any = {}, customDecoratorMetadata?: any) {
        let annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new CompConst(Decorator.getMetadata(metadata, customDecoratorMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    }
}