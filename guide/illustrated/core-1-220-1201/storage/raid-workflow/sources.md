# Source notes

- [CompTIA 220-1201 objectives](https://assets.ctfassets.net/82ripq7fjls2/1oSdlyujpaX3GrM0rir6Ge/91afb2be72785281e8fb4c0d9a70c6f4/CompTIA-A-220-1201-Exam-Objectives-3.0.pdf): 3.4 includes RAID 0, 1, 5, 6 and 10; 5.2 covers RAID and drive symptoms.
- [Dell: RAID specifications](https://www.dell.com/support/kbdoc/en-us/000128635/dell-servers-what-are-the-raid-levels-and-their-specifications): classic layouts, minimum members and failure limits. Product-specific stripe sizes and maximum array sizes are not generalized.
- [Intel: defining RAID volumes](https://www.intel.com/content/www/us/en/support/articles/000005867/technologies.html): capacity relationships and layout behavior. Product-specific member-count limits are not generalized.
- [IBM technical reference](https://public.dhe.ibm.com/storage/7133/pdfs/SC2__UKTechref.pdf): XOR reconstruction principles; used for the original four-bit teaching example, not current hardware recommendations.
- [IBM Research: cached RAID controller](https://research.ibm.com/publications/architecture-of-a-fault-tolerant-cached-raid-controller): small-write data/parity operations.
- [Dell: hot spare demonstration](https://www.dell.com/support/contents/en-us/videos/videoplayer/how-to-set-perc-hard-drive-as-hot-spare/6365224629112): standby assignment and rebuild behavior.
- [Dell: rebuild troubleshooting](https://dl.dell.com/topicspdf/dell-opnmang-srvr-admin-v8.0.1_glossary_en-us.pdf): redundancy and replacement prerequisites. Actual repairs require the current device manual.
- [Dell: cache policies](https://www.dell.com/support/manuals/en-ca/perc-h345/perc10_ug/virtual-disk-write-cache-policies?guid=guid-0aa9694d-520b-47e1-b78b-d704b0f7961f&lang=en-us): write-through and write-back acknowledgment.
- [Microsoft: Disk Management](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management): disk/partition/volume inspection.
- [Microsoft: Storage Spaces](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-spaces-in-windows): pooled storage and resiliency; not assumed identical to classic RAID.
- [Microsoft: Device Manager](https://support.microsoft.com/en-us/windows/open-device-manager-a7f2db46-faaf-24f0-8b7b-9e4a6032fc8c), [Performance Monitor](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/perfmon), [MMC](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mmc): observation tools and console context.

## Model boundaries

The capacity lab uses conventional fixed-width members limited by the smallest member, before metadata and formatting. RAID 1 is a two-drive mirror. RAID 10 uses an even number of paired mirrors. RAID 6 uses two independent parity relationships; the four-bit XOR lab demonstrates RAID 5 only. Failure/rebuild examples assume other required blocks remain readable. The comic is reused from the study hub's earlier original concept-rescue artwork; the interactive diagrams supply the exact layout labels.

## Validation

The functional checks exercise all 68 member-failure combinations across the five default arrays, recoverable rebuilds, failure during rebuild, read/write controls, capacity conservation, mixed sizes, XOR, flashcards, scenario answers and quiz feedback. This is a teaching model rather than a benchmark or real storage-management tool.
