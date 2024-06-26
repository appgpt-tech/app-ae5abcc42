//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  username: string;

  @Column('text', { nullable: true })
  email: string;

  @Column('text', { nullable: true })
  password: string;

  @Column('integer', { nullable: true })
  height: number;

  @Column('integer', { nullable: true })
  town: number;

  @Column('integer', { nullable: true })
  province: number;

  @Column('text', { nullable: true })
  maritalStatus: string;

  @Column('date', { nullable: true })
  dateOfBirth: Date;

  @Column('text', { nullable: true })
  highestEducation: string;

  @Column('bool', { nullable: true })
  haveKids: boolean;

  @Column('text', { nullable: true })
  lookingFor: string;
}
