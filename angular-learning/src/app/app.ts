import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { profileComponent } from './profile/profile';
import { buttonComponent } from './button/button';
import { counterApp } from './counterapp/counterapp';
import { EventsComponent } from './events/events';
import { GetSetInputField } from './getsetinputfield/getsetinputfield';
import { StyleOptions } from './styleoptions/styleoptions';
import { ControlFlowStatement } from './controlflowstatement/controlflowstatement';
import { SignalsComponent } from './signals/signals';
import { EffectsLearning } from './effects/effects';
import { ContextualVariables } from './contextualvariables/contextualvariables';
import { TwoWayBinding } from './twowaybinding/twowaybinding';
import { TwoDoList } from './two-do-list/two-do-list';
import { Directives } from './directives/directives';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';
import { FormsAngular } from './forms/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, profileComponent, buttonComponent, 
    counterApp, EventsComponent, GetSetInputField, StyleOptions, ControlFlowStatement, SignalsComponent, EffectsLearning, ContextualVariables, TwoWayBinding, TwoDoList, Directives, DynamicStyling, FormsAngular],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = `angular-learning`;
  name:string="Aryan";
}
