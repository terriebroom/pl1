# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```https://maps.googleapis.com/maps/api/directions/json?origin=18+summit+street+apartments&destination=500+7th+ave+new+york&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
geocoded_waypoints
0
geocoder_status : "OK"
place_id : "ChIJLWYP07dUwokRcklMS5H8W_I"
types
0 : "establishment"
1 : "finance"
2 : "point_of_interest"
1
geocoder_status : "OK"
place_id : "ChIJAxmUe6xZwokRPpZCDmpNCss"
types
0 : "street_address"
routes
0
bounds
northeast
lat : 40.7803175
lng : -73.987892
southwest
lat : 40.7422271
lng : -74.21406879999999
copyrights : "Map data ©2022 Google"
legs
0
distance
text : "15.3 mi"
value : 24683
duration
text : "29 mins"
value : 1720
end_address : "500 7th Ave, New York, NY 10018, USA"
end_location
lat : 40.7531295
lng : -73.989085
start_address : "18 Summit St, East Orange, NJ 07017, USA"
start_location
lat : 40.7664478
lng : -74.20908899999999
steps
0
distance
text : "276 ft"
value : 84
duration
text : "1 min"
value : 24
end_location
lat : 40.7668351
lng : -74.2099416
html_instructions : "Head north-west on Summit St towards N Walnut St"
polyline
points : "ieywFx}|cMSl@y@zB"
start_location
lat : 40.7664478
lng : -74.20908899999999
travel_mode : "DRIVING"
1
distance
text : "0.4 mi"
value : 675
duration
text : "3 mins"
value : 176
end_location
lat : 40.7616466
lng : -74.21406879999999
html_instructions : "Turn left onto N Walnut St"
maneuver : "turn-left"
polyline
points : "wgywFbc}cM|@p@|H|FvA|@^VDBp@b@DBDDp@b@JFd@XnAz@HDx@h@`AhABD\\NHPJ@??@BB@?NLBBHF@@@@@@@@h@b@"
start_location
lat : 40.7668351
lng : -74.2099416
travel_mode : "DRIVING"
2
distance
text : "243 ft"
value : 74
duration
text : "1 min"
value : 13
end_location
lat : 40.761246
lng : -74.2133684
html_instructions : "Turn left onto Freeway Dr E"
maneuver : "turn-left"
polyline
points : "igxwF||}cMf@eAP_@Te@"
start_location
lat : 40.7616466
lng : -74.21406879999999
travel_mode : "DRIVING"
3
distance
text : "0.3 mi"
value : 483
duration
text : "1 min"
value : 29
end_location
lat : 40.7590103
lng : -74.2084594
html_instructions : "Take the slip road on the left to I-280 E"
maneuver : "ramp-left"
polyline
points : "ydxwFpx}cMBQBMDKDM@AJWJWDOHOBGFOd@gAf@uABGBGDIDML_@BGVq@FQVs@HULg@f@yAN_@hAgDPg@Pi@JY"
start_location
lat : 40.761246
lng : -74.2133684
travel_mode : "DRIVING"
4
distance
text : "5.2 mi"
value : 8415
duration
text : "6 mins"
value : 370
end_location
lat : 40.7544868
lng : -74.1213748
html_instructions : "Keep left, follow signs for I-280 E/Newark/New Jersey Turnpike and merge onto I-280 E
Toll road
"
maneuver : "keep-left"
polyline
points : "yvwwFzy|cMDWBE@EJc@@GBEH[DOJa@BGNo@HWNk@Li@Nk@Li@Nk@H[BM@G@g@^sA@A@EDUBG?ABI@E?C@?b@mB\uA@EFWDK@E@G@A?ANg@XiA?A\gAJ]n@oBd@gAf@iAFQ@?j@wAXu@f@kA^}@@EDIRg@L[Zq@BIh@mAf@iAN_@Rg@Vm@BK@A\y@l@{ABG@Ch@qAJU@Ch@qARg@FKTq@BEX_APg@XgARgAP}@LyAHaA@YHgAJmB@E?KDg@Fi@BOBQDQD[F[FY@GF]H[HWRu@H[f@iBRu@Pu@Jc@F]DUDYD[BYBSB]@c@@QBy@@g@BmA@gA?m@@g@@W?U?E?C@Q?WBY@Y@Q@MDk@D[DWF_@Nw@R}@Li@ZqA@ET}@|@wDTcATgAF]H]Ly@BIBODQFa@Nq@@EF_@F_@FW?EXwARuAXgBXcBZaCPeATiBXaCFs@j@cGHw@?CHq@XkBZqBXcBBSFg@Dg@@WBa@@c@@]?I?G?e@Aa@Aa@Cg@Ek@Eo@Ek@CM?KGo@Eo@Em@?AA?Cc@AI?A?GE_@AY?AAMASAOCk@?[?k@J_DJ_DDu@@[@K@K?AB[B[Jw@L{@DUJm@@ATaADOPk@Rm@JUBIFODIBIZm@j@aAp@cAt@aAx@kA~AyB`@g@RWBEn@{@bAwA^g@lA_B@AXa@RYz@qA?A\k@Xm@JSLY^gAPi@Ne@La@Lk@Jm@PeAD]Fe@?EHy@Dg@Ba@@M@[?M@G?[@c@?u@AcBC{DGwE?A?EGmCIkDGqBAg@G{A?ACe@Cq@IcBEw@IkASmCIs@Is@MgAAK?AGa@Ik@Ii@a@qCaAsG?AIk@a@gCGa@AKIm@g@}Co@iE?Ci@qDU}AAG?ACSCKAIIg@Kq@?A]wBAGAIAMCSCOMw@Ga@O{@Ge@YeBYiAOs@ACMk@K]CKQm@Oi@Sm@O_@Oc@AESg@KYYu@IOCEEIUc@e@{@m@{@GI_@c@A?WYAC][CCSQCCg@_@GEOK]UCCy@e@c@SKGCA[OiBw@cAc@c@QYOw@]CAKECAECSIEC{@_@WKSGWMKESIMGc@Qo@Yu@[YMWICCQIWKMIGCGCUOSMIIi@q@Y_@QYO]GOGQK]I]G_@AACMCUEWCWEu@E_DAs@Ag@KoAMmAAQIo@Ia@EQe@uC"
start_location
lat : 40.7590103
lng : -74.2084594
travel_mode : "DRIVING"
5
distance
text : "0.7 mi"
value : 1109
duration
text : "1 min"
value : 61
end_location
lat : 40.7529101
lng : -74.1117522
html_instructions : "Take exit 15X and 16E towards Lincoln Tunl
Toll road
"
maneuver : "ramp-right"
polyline
points : "qzvwFpykcMA[AO?KAM?W@M?K@M@K?GBK@KBGBKJSFQHOJOHMJOBCj@k@f@g@@AZ]BCn@o@DEHIBC@AJK@A@ABC@ALOBABCFIBA?A@?BCFGNO^a@r@s@LMn@q@FGb@c@^a@l@m@v@w@Z]NQJQJQFODK@A?ADQBKBGBW@M?G?]?C?QCSEWEQEOGQMWU[U[AAs@{@EEW[[_@[c@Ue@OY]y@w@gBEK]y@a@}@EMSe@AAAAOI"
start_location
lat : 40.7544868
lng : -74.1213748
travel_mode : "DRIVING"
6
distance
text : "3.4 mi"
value : 5549
duration
text : "4 mins"
value : 215
end_location
lat : 40.7768938
lng : -74.05817739999999
html_instructions : "Merge onto I-95 N
Toll road
"
maneuver : "merge"
polyline
points : "upvwFl}icMSg@wAuDKWk@_B[{@ISe@uAQg@K]Qg@AEKWSm@CEa@uAAAcAeDQg@Oe@Og@So@[cAK_@Qk@Kg@AEGUo@sC_A{Fc@oCIm@E_@AMUyB?CIkAGeAGmAEw@GwACi@CkAAu@AO?i@?CAm@?OAi@?Y?I?s@AwA?s@?I?mAAe@?G?cC?I?KAa@?I?c@?o@Am@?I?C?a@?m@?OAmA?O?]?]?QAm@?_AAe@?M?uBAoA?M?m@?_@?MCsA?IA}@A}@AUC_AEcAGaAI}@Em@Iy@UwBOqAMy@Km@Mm@Ig@Oq@Ki@Qs@Kg@WaAa@qAUu@Qi@q@mBeBsE_BgEi@wAUo@AAQg@M]EIu@uBA?[y@y@aCCGCIM]CIYw@]aAK[KYGQ?AKU?A[{@Oc@CIWu@?AYy@m@cBk@eBmBqF[_A[_AmAoDEIUq@Wu@Uo@Oc@q@mB?AACQi@EIIUUo@Wo@?AIQAE?AA?ACEM?ACIa@_AMWe@iA]q@Q]Q_@Q_@sAeCGKiAmBU]Yc@OS}@qAW]S[cAoAi@q@Y[{A_B_@a@qBiB_@_@_DcC}CsBsAy@aEwBk@_@[U_DeBe@W[QCCyCiBq@a@_Ai@kAu@m@c@w@a@{@k@i@Y"
start_location
lat : 40.7529101
lng : -74.1117522
travel_mode : "DRIVING"
7
distance
text : "0.6 mi"
value : 1017
duration
text : "1 min"
value : 65
end_location
lat : 40.7787379
lng : -74.0490049
html_instructions : "Take exit 16E towards Lincoln Tunl
Toll road
"
maneuver : "ramp-right"
polyline
points : "qf{wFrn_cMMa@OWUWe@[aAi@[Qe@UAAg@S[O[MIEECgBm@GOCEECEEECIGKGIGKIACGGCECCOSCEGIIQMUMWYs@K]GWI[G_@E[EYAQEi@Ao@Ai@@e@@]@e@Ba@Fa@Da@F_@H_@H]FYdBwGHWH]Ja@J]J_@Rm@J]L[r@oB"
start_location
lat : 40.7768938
lng : -74.05817739999999
travel_mode : "DRIVING"
8
distance
text : "0.1 mi"
value : 215
duration
text : "1 min"
value : 11
end_location
lat : 40.7776502
lng : -74.046908
html_instructions : "Continue onto NJ-495 E
Toll road
"
polyline
points : "cr{wFfu}bM\aAn@kBL]L]N[NYN[HQt@sA"
start_location
lat : 40.7787379
lng : -74.0490049
travel_mode : "DRIVING"
9
distance
text : "2.1 mi"
value : 3387
duration
text : "4 mins"
value : 218
end_location
lat : 40.7654313
lng : -74.0233184
html_instructions : "Keep left to stay on NJ-495 E
Toll road
"
maneuver : "keep-left"
polyline
points : "ik{wFdh}bMHS\q@Tm@H[FUBQ?AJ}@D_@Dm@Bc@?}@BODe@Fi@Hs@NeAd@kBb@kBp@uCf@iBFU^sAb@eBb@cBNo@Pm@VeA?C|@oDT_AFUPu@z@cDLe@@A`@{ADSh@oBPm@h@eBTq@`BqEj@yAf@oAZw@b@gA@ELYDKJY`@aAFOJWRk@Pc@FOJWPg@Pg@Vo@h@}AJ[Ni@La@XaALg@La@^uAd@yAZ_AHUJ_@BIPg@L]^iAL_@JYFSTo@La@Pi@JYDKDOHYPe@?CPg@FQDMJ[Xw@ZcAhA_DHKLMHI`@g@HGJILG@ARKNGPGVGRCNCD?F?N?J@N@NDZDB@@?`C^|@PPF~@RjDbAd@PHBf@Rb@N`@R`@V^^Rf@J`@F`@@h@?NGb@G^EHCJSVMPIJMHWJYDO@GAGAGCGCECECECEEy@{@k@m@wBgAaBi@"
start_location
lat : 40.7776502
lng : -74.046908
travel_mode : "DRIVING"
10
distance
text : "0.8 mi"
value : 1312
duration
text : "2 mins"
value : 101
end_location
lat : 40.76249079999999
lng : -74.0099137
html_instructions : "Keep right to stay on NJ-495 E
Toll road
Parts of this road may be closed at certain times or on certain days
Entering New York
"
maneuver : "keep-right"
polyline
points : "}~xwFvtxbMUUcAy@ACMMIMACEKEWe@[AASSQYEKCICIEOKe@Ga@EWAC?CACAOCa@C]?A?I?E?GA[Fu@Be@BGJq@Le@DQDMPu@H_@@C@A?E@CBG?ADSf@yAJ_@Pi@Ts@\gABIL_@d@}AL]Ni@DI\gATu@pAcEBKL]Pi@Ni@BIL]dAeDd@}AL_@hAoDJ]x@gC\iAPi@Ng@J["
start_location
lat : 40.7654313
lng : -74.0233184
travel_mode : "DRIVING"
11
distance
text : "0.8 mi"
value : 1234
duration
text : "1 min"
value : 88
end_location
lat : 40.757122
lng : -73.99709399999999
html_instructions : "Continue onto NY-495 E
Toll road
May be closed at certain times or on certain days
"
polyline
points : "qlxwF|`vbMb@qA`@qAb@sAb@qA`@qAt@{Bb@sALa@@EJ[Vw@hBwFJYDMJ[Vw@ZcAt@{BX_A@E@C?AxCqJj@kB@GL_@FSFUjBaGRm@Rm@x@mCPg@DODMBO@EBIFY"
start_location
lat : 40.76249079999999
lng : -74.0099137
travel_mode : "DRIVING"
12
distance
text : "0.2 mi"
value : 252
duration
text : "1 min"
value : 45
end_location
lat : 40.7576671
lng : -73.9948632
html_instructions : "Take the exit on the left towards 42 St/I-495 E/NY-9A/All Pts
Toll road
"
maneuver : "ramp-left"
polyline
points : "_kwwFxpsbM?U@U?A?I@G@I@M?GBKBMDW?AZ}@DQ@E@G@I@G?M?KCQCMEMEIAAGKMGMI[QYQQOWOGCK?"
start_location
lat : 40.757122
lng : -73.99709399999999
travel_mode : "DRIVING"
13
distance
text : "0.4 mi"
value : 671
duration
text : "4 mins"
value : 245
end_location
lat : 40.75475
lng : -73.987892
html_instructions : "Turn right onto W 40th St"
maneuver : "turn-right"
polyline
points : "mnwwFzbsbMBMTw@BIr@{BTs@fAkDlAwDLc@jAsDvAmE`@sAPg@Pi@Pi@Pg@?ANg@Pi@J["
start_location
lat : 40.7576671
lng : -73.9948632
travel_mode : "DRIVING"
14
distance
text : "0.1 mi"
value : 206
duration
text : "1 min"
value : 59
end_location
lat : 40.7531295
lng : -73.989085
html_instructions : "Turn right onto 7th Ave/Fashion Ave
Destination will be on the right
"
maneuver : "turn-right"
polyline
points : "e|vwFhwqbM^V\T^VZRzBxAlAx@"
start_location
lat : 40.75475
lng : -73.987892
travel_mode : "DRIVING"
traffic_speed_entry
via_waypoint
overview_polyline
points : "ieywFx}|cMmAhDzJnHnD|BbGzDdAnAl@f@VPb@\BBh@b@f@eAf@eAF_@Xs@^_AvBuFz@_CV}@v@yBxBsGVgA~@kDxAaGBo@^sALe@j@cCr@qCfA{Dz@mClAqCnA_DnAyCvD_JnB}EvCiHj@gBXgARgAP}@LyAJ{AVgETsBn@eDnAsEx@mDTeBJgBJwFBcCJgCJgALw@b@uBh@{BjB_It@}Dv@eEt@kE`BsKn@kFr@wHl@yE`AqGLeC@uAMwCc@cGUgDCgA?k@J_DPuEBg@HeAj@wDn@_Cj@}AHSfAoB`GkI|GcJhBoCv@yAXm@p@qB\gAXyAVcBVmCFyAB}BMwNQaIQuFQ}DOcC]aEYgC[yBwC}ReD}TaB}KWaBYeBYiAQw@YiAy@qCa@iAy@wBi@cAe@{@m@{@g@m@y@y@cAy@y@k@mBcAmF}BeCiAqEkBsEqBy@e@s@{@k@y@Wm@So@WmAIm@ImAGsEMwBO_BSqAk@gDCk@?_ABm@H_@`@aAd@q@pBsBvAwA\]lJsJj@o@Vc@N]H_@Hu@CgAKi@Ma@c@s@W]mB}Bq@iAm@sA}BkF]w@OISg@cBmEwBeGq@sBeAaDgBuF_A{Ck@yBw@iDcBkKg@uEYcFUeGGuFGwSGaSGcIS{EOkB_@qD]kCY{Aw@wDeA{Dg@_BwCaIaDqI{AeEqBuFeEwL{Me`@eByEyAkDsAoC{AqC_BkC_CgDwAkBcAmA{BaCqCiC_DcC}CsBuGqDgAu@eE}BkFaDqFeDeBeAMa@OWUWe@[}A{@kB{@sCeAW_@e@[Y[_@g@Wg@g@kASu@Q{@SqBCyABcADgALcAb@wBdCoJv@iCnCyHZ{@^u@xAuCr@_BPq@TqBHqABmALoAXyBhAwExA_GnBsHx@gDzEcRjBwGvBcGrAiDnA_Dz@wB`CoGrAeEtAaFzCiJvDgLt@{BhA_DHKVWj@o@n@_@`@Oj@Kl@CfANdEr@pAZpEtAp@VdAb@`@V^^Rf@J`@F`@@h@Gr@Mh@Wb@W\e@Ti@FOC[OqBsBwBgAaBi@yAoAY_@GOEWe@[UUWe@YiAO}@KyAAs@J{ANy@j@{BLe@~@aDzCuJ`Lc^bMg`@jGsRjEqN|F}QPs@Jc@@k@B]Ho@DY`@oAF_@?YG_@Ue@qAu@i@_@SCXeAv@eCxD{LlG{R`@qAJ[^V\T^VdFfD"
summary : "I-280 E"
warnings
waypoint_order
status : "OK"
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
