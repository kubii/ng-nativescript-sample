import {Component, Directive} from '@angular/core';
import {CoreConfig, Platform} from '../core.config';
import {Metadata} from './Component';
import {Url} from './url';

const _reflect: any = Reflect;
let noop = () => { };

export class Decorator {
    public static getMetadata(metadata: Metadata = {}, customDecoratorMetadata?: any) {
        var platform = metadata.platform || {};
        
        if (platform.templateUrl)
            metadata.templateUrl = Url.fixTemplateUrl(platform.templateUrl);
            
        if (platform.styleUrls) {
            metadata.styleUrls = metadata.styleUrls || [];
            metadata.styleUrls = metadata.styleUrls.concat(Url.fixStyleUrls(platform.styleUrls));
        }
        
        if (platform.directives) {
            metadata.directives = metadata.directives || [];
            metadata.directives = metadata.directives.concat(platform.directives);
        }
        
        if (platform.providers) {
            metadata.providers = metadata.providers || [];
            metadata.providers = metadata.providers.concat(platform.providers);
        }

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