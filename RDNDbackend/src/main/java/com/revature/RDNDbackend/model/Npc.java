package com.revature.RDNDbackend.model;


import javax.persistence.*;

@Entity
@Table(name = "npc")
public class Npc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long npcId;
    
    @Column(name = "npc_name")
    private String npcName;

    @Column(name = "npc_class")
    private String npcClass;

    @Column(name = "npc_size")
    private String npcSize;

    @Column(name = "npc_race")
    private String npcRace;

    @Column(name = "npc_alignment")
    private String npcAlignment;

    @Column(name = "npc_discription")
    private String npcDiscription;

    @Column(name = "npc_saving_throws")
    private String npcSavingThrows;

    @Column(name = "npc_skills")
    private String npcSkills;
    
    @Column(name = "npc_senses")
    private String npcSenses;

    @Column(name = "npc_languages")
    private String npcLanguages;
    
    @Column(name = "npc_special_traits")
    private String npcSpecialTraits;

    @Column(name = "npc_actions")
    private String npcActions;

    @Column(name = "npc_reactions")
    private String npcReactions;

    @Column(name = "npc_armor_class")
    private Integer npcArmorClass;

    @Column(name = "npc_hit_point")
    private Integer npcHitPoint;

    @Column(name = "npc_speed")
    private String npcSpeed;

    @Column(name = "npc_str")
    private Integer npcStr;

    @Column(name = "npc_dex")
    private Integer npcDex;

    @Column(name = "npc_con")
    private Integer npcCon;

    @Column(name = "npc_int")
    private Integer npcInt;

    @Column(name = "npc_wis")
    private Integer npcWis;

    @Column(name = "npc_cha")
    private Integer npcCha;

    public Npc(){
        super();
    }

    public Npc(String npcName, String npcClass, String npcSize, String npcRace, String npcAlignment, String npcSpeed, 
               String npcDiscription, String npcSavingThrows, String npcSkills, String npcSenses, 
               String npcLanguages, String npcSpecialTraits, String npcActions, String npcReactions, 
               Integer npcArmorClass,Integer npcHitPoint,  Integer npcStr, Integer npcDex, Integer npcCon, 
               Integer npcInt, Integer npcWis, Integer npcCha) {
                   this.npcName = npcName;
                   this.npcClass = npcClass;
                   this.npcSize = npcSize;
                   this.npcRace = npcRace;
                   this.npcAlignment = npcAlignment;
                   this.npcSpeed = npcSpeed;
                   this.npcDiscription = npcDiscription;
                   this.npcSavingThrows = npcSavingThrows;
                   this.npcSkills = npcSkills;
                   this.npcSenses = npcSenses;
                   this.npcLanguages = npcLanguages;
                   this.npcSpecialTraits = npcSpecialTraits;
                   this.npcActions = npcActions;
                   this.npcReactions = npcReactions;
                   this.npcArmorClass = npcArmorClass;
                   this.npcHitPoint = npcHitPoint;
                   this.npcStr = npcStr;
                   this.npcDex = npcDex;
                   this.npcCon = npcCon;
                   this.npcInt = npcInt;
                   this.npcWis = npcWis;
                   this.npcCha = npcCha;
               }

    public Long getNpcId() {
        return npcId;
    }
    public void setNpcId(Long npcId) {
        this.npcId = npcId;
    }

    public String getNpcName() {
        return npcName;
    }
    public void setNpcName(String npcName) {
        this.npcName = npcName;
    }

    public String getNpcClass() {
        return npcClass;
    }
    public void setNpcClass(String npcClass) {
        this.npcClass = npcClass;
    }


    public String getNpcSize() {
        return npcSize;
    }
    public void setNpcSize(String npcSize) {
        this.npcSize = npcSize;
    }

    public String getNpcRace() {
        return npcRace;
    }
    public void setNpcRace(String npcRace){
        this.npcRace = npcRace;
    }
    
    public String getNpcAlignment() {
        return npcAlignment;
    }
    public void setNpcAlignment(String npcAlignment){
        this.npcAlignment = npcAlignment;
    }

    public String getNpcSpeed() {
        return npcSpeed;
    }
    public void setNpcSpeed(String npcSpeed){
        this.npcSpeed = npcSpeed;
    }

    public String getNpcDiscription() {
        return npcDiscription;
    }
    public void setNpcDiscription(String npcDiscription){
        this.npcDiscription = npcDiscription;
    }

    public String getNpcSavingThrows(){
        return npcSavingThrows;
    }
    public void setNpcSavingThrows(String npcSavingThrows){
        this.npcSavingThrows = npcSavingThrows;
    }
    
    public String getNpcSkills(){
        return npcSkills;
    }
    public void setNpcSkills(String npcSkills){
        this.npcSkills = npcSkills;
    }

    public String getNpcSenses(){
        return npcSenses;
    }
    public void setNpcSenses(String npcSenses){
        this.npcSenses = npcSenses;
    }

    public String getNpcLanguages(){
        return npcLanguages;
    }
    public void setNpcLanguages(String npcLanguages){
        this.npcLanguages = npcLanguages;
    }

    public String getNpcSpecialTraits(){
        return npcSpecialTraits;
    }
    public void setNpcSpecialTraits(String npcSpecialTraits){
        this.npcSpecialTraits = npcSpecialTraits;
    }
    
    public String getNpcActions(){
        return npcActions;
    }
    public void setNpcActions(String npcActions){
        this.npcActions = npcActions;
    }

    public String getNpcReactions(){
        return npcReactions;
    }
    public void setNpcReactions(String npcReactions){
        this.npcReactions = npcReactions;
    }

    public Integer getNpcArmorClass(){
        return npcArmorClass;
    }
    public void setNpcArmorClass(Integer npcArmorClass){
        this.npcArmorClass = npcArmorClass;
    }

    public Integer getNpcHitPoint(){
        return npcHitPoint;
    }
    public void setNpcHitPoint(Integer npcHitPoint){
        this.npcHitPoint = npcHitPoint;
    }

    public Integer getNpcStr(){
        return npcStr;
    }
    public void setNpcStr(Integer npcStr){
        this.npcStr = npcStr;
    }    

    public Integer getNpcDex(){
        return npcDex;
    }
    public void setNpcDex(Integer npcDex){
        this.npcDex = npcDex;
    }   

    public Integer getNpcCon(){
        return npcCon;
    }
    public void setNpcCon(Integer npcCon){
        this.npcCon = npcCon;
    }  

    public Integer getNpcInt(){
        return npcInt;
    }
    public void setNpcInt(Integer npcInt){
        this.npcInt = npcInt;
    } 

    public Integer getNpcWis(){
        return npcWis;
    }
    public void setNpcWis(Integer npcWis){
        this.npcWis = npcWis;
    } 

    public Integer getNpcCha(){
        return npcCha;
    }
    public void setNpcCha(Integer npcCha){
        this.npcCha = npcCha;
    } 

}
